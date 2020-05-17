const express = require("express")
const router = express.Router()
const { isAdmin } = require("../lib/middleware")

const models = require("../db/models")

router.post("/create", isAdmin, async (req, res) => {
  const { title, problem_info, input_info, output_info, limit, example_data, judge_data } = req.body
  console.log(req.body)
  const newProblem = await models.Problem.create({
    title, problem_info, input_info, output_info, limit
  })
  example_data.forEach((v, i) => {
    models.Problem_example.create({
      input_example : v.input,
      output_example : v.output,
      ProblemId : newProblem.id
    })
  })
  judge_data.forEach((v, i) => {
    models.Problem_judge.create({
      input_judge : v.input,
      output_judge : v.output,
      ProblemId : newProblem.id
    })
  })
})

module.exports = router
