const express = require('express')
const router = express.Router()

const authRouter = require("./auth")
const problemRouter = require("./problem")
const submitRouter = require("./submit")
const mypageRouter = require("./mypage")

router.use("/auth", authRouter)
router.use("/problem", problemRouter)
router.use("/submit", submitRouter)
router.use("/myPage", mypageRouter)

module.exports = router