const express = require("express")
const sequelize = require("./db/models").sequelize

const app = express()
sequelize
  .sync()
  .then(() => {
    console.log("✓ DB connection success.")
    console.log("  Press CTRL-C to stop\n")
  })
  .catch((err) => {
    console.error(err)
    console.log("✗ DB connection error. Please make sure DB is running.")
    process.exit()
  })

app.listen(3030, () => {
  console.log('서버연결')
})
