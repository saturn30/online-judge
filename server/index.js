const express = require("express")
const path = require("path")
const cors = require("cors")
const sequelize = require("./db/models").sequelize

const apiRouter = require('./router')

const port = process.env.PORT || 3030

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

const corsOptions = {
  origin: "http://localhost:3000", // 허락하고자 하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
}

app.use(express.static(path.join(__dirname, "../build")))

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api", apiRouter)

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"))
})

app.listen(port, () => {
  console.log("서버연결")
})
