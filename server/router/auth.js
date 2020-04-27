const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const models = require('../db/models')


router.post('/join', async (req, res) => {
  const {ID, pw} = req.body
  console.log(ID, pw)
  const exist = await models.User.findOne({where : {user_id: ID}})
  console.log(exist)
  if(exist){
    return res.send('exist')
  }
  await models.User.create({
    user_id : ID,
    password: bcrypt.hashSync(pw, 10)
  })
  return res.send('success')
})

module.exports = router