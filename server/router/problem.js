const express = require("express")
const router = express.Router()
const { isAdmin } = require("../lib/middleware")

router.post("/create", isAdmin, (req, res) => {
  console.log(req.body)
})

module.exports = router
