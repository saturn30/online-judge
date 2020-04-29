const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const router = express.Router()

const {jwt_secret} = require('../lib/key')
const models = require('../db/models')


router.post('/join', async (req, res) => {
  const {ID, pw} = req.body
  console.log(ID, pw)
  const exist = await models.User.findOne({where : {user_id: ID}})
  if(exist){
    return res.send('exist')
  }
  await models.User.create({
    user_id : ID,
    password: bcrypt.hashSync(pw, 10)
  })
  return res.send('success')
})

router.post('/login', async(req, res) => {
  const {id, pw} = req.body
  const data = await models.User.findOne({where: {user_id: id}})
  if(data){
    const hash = data.dataValues.password
    const bcr = bcrypt.compareSync(pw, hash)
    if(bcr) {
      const token = jwt.sign({ id }, jwt_secret, { expiresIn: '30d' });
      return res.json({message:'success', token})
    }
    else {
      return res.json({message:'비밀번호가 일치하지 않습니다.'})
    }
  }
  else {
    return res.json({message:'존재하지 않는 아이디입니다.'})
  }
})

router.post('/checkadmin', (req, res) => {
  const token = req.headers.authorization
  try{
    const decoded = jwt.verify(token, jwt_secret)
    if(decoded.id === 'admin'){
      return res.json({message : 'success'})
    }
    else {
      return res.json({message : "관리자 계정만 가능합니다."})
    }
  }
  catch {
    return res.json({message : "로그인이 필요합니다."})
  }
})

module.exports = router