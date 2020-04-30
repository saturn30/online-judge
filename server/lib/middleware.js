const jwt = require('jsonwebtoken')
const {jwt_secret} = require('./key')

module.exports.isAdmin = (req, res, next) => {
  const token = req.headers.authorization
  try{
    const decoded = jwt.verify(token, jwt_secret)
    if(decoded.id === 'admin'){
      next()
    }
    else {
      return res.json({message : "관리자 계정만 가능합니다."})
    }
  }
  catch {
    return res.json({message : "로그인이 필요합니다."})
  }
}

module.exports.isLogin = (req, res) => {
  
}