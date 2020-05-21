const express = require("express")
const router = express.Router()
const { isLogin } = require("../lib/middleware")
const { Worker } = require("worker_threads")

const models = require("../db/models")

router.get('/', isLogin, async (req, res) => {
  const {UserId} = req.body
  const user = await models.User.findOne({where: {id : UserId}, include: {model: models.User_problem}})
  const myData = {
    user_id : user.user_id,
    total_submit : user.total_submit,
    solved_arr : user.User_problems.map(v => v.solved ? v.ProblemId : false).filter(v => v),
    wrong_arr : user.User_problems.map(v => !v.solved ? v.ProblemId : false).filter(v => v),
    message: 'success'
  }
  res.send(myData)
})

module.exports = router
