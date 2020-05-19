const express = require("express")
const router = express.Router()
const { isLogin } = require("../lib/middleware")
const { Worker } = require("worker_threads")

const models = require("../db/models")

router.post("/judge", isLogin, async (req, res) => {
  const { UserId, ProblemId } = req.body
  const code = req.body.code.replace(/\n|\t/gi, "")
  const problem = await models.Problem.findOne({
    where: { id: ProblemId },
    include: [{ model: models.Problem_judge }],
  })
  const user = await models.User.findOne({ where: { id: UserId } })
  const submit = await models.Submit.create({ code, UserId, ProblemId })
  const user_problem = (await models.User_problem.findOrCreate({ where: { UserId, ProblemId } }))[0]

  const judge_result = await Promise.all(
    problem.dataValues.Problem_judges.map(
      async (v, i) =>
        await new Promise((resolve, reject) => {
          const { input_judge, output_judge, id } = v.dataValues
          const input_arr = input_judge.split("\n").filter((v) => v.trim())
          const output_arr = output_judge.split("\n").filter((v) => v.trim())
          const judge = { ProblemJudgeId: id, SubmitId: submit.id }
          const worker = new Worker("./lib/worker.js")
          try {
            worker.postMessage({ code, input_arr })
            let done = false
            worker.on("message", (msg) => {
              done = true
              console.log(i, msg)
              worker.terminate()
              let check = true
              if (Array.isArray(msg.answer) && msg.answer.length === output_arr.length) {
                for (let i = 0; i < output_arr.length; i++) {
                  if (msg.answer[i] != output_arr[i]) check = false
                }
              } else check = false
              if (check) {
                judge.time = msg.time
                judge.result = "정답"
                resolve(judge)
              } else {
                judge.result = "오답"
                resolve(judge)
              }
            })
            setTimeout(() => {
              if (!done) {
                worker.terminate()
                judge.result = "시간초과"
                resolve(judge)
              }
            }, 10000)
          } catch (e) {
            judge.result = "오답"
            resolve(judge)
          }
        })
    )
  )
  let solved = true
  judge_result.map((v) => {
    if (v.result != "정답") solved = false
    models.Submit_result.create(v)
  })
  submit.solved = solved
  if (!user_problem.solve) {
    user.total_submit = user.total_submit + 1
    problem.total_submit = problem.total_submit + 1
    if(solved) problem.total_solved = problem.total_solved + 1
  }
  if (!user_problem.solved) user_problem.solved = solved
  user.save()
  problem.save()
  user_problem.save()
  submit.save()
  res.send(judge_result)
})

module.exports = router