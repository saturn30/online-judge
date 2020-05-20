const { parentPort } = require("worker_threads")

parentPort.on("message", ({ code, input_arr }) => {
  try{
    eval(code)
    const start = Date.now()
    const answer = solve(input_arr)
    const end = Date.now()
    parentPort.postMessage({ answer, time: end - start })
  }
  catch(e){
    parentPort.postMessage({ answer: false, time: 0 })
  }
})
