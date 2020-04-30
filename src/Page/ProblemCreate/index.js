import React, { useEffect, useState } from "react"
import Layout from "../../Component/Layout"
import axios from "axios"
import { serverIP } from "../../lib/key"
import { useCookies } from "react-cookie"

const ProblemCreate = () => {
  const [cookies] = useCookies(["token"])
  const [message, setMessage] = useState("")
  const [submitData, setSubminData] = useState({
    title: "",
    problem_info: "",
    input_info: "",
    output_info: "",
    limit: "",
    example_data: [{ input: "", output: "" }],
    judge_data: [{ input: "", output: "" }],
  })
  useEffect(() => {
    const checkadmin = async () => {
      const res = await axios.post(
        serverIP + "/auth/checkadmin",
        {},
        {
          headers: { Authorization: cookies.token },
        }
      )
      console.log(res.data.message)
      setMessage(res.data.message)
    }
    checkadmin()
  }, [cookies])

  const submit = async () => {
    const res = await axios.post(serverIP + "/problem/create", submitData, {
      headers: { Authorization: cookies.token },
    })
  }

  const make = () => (
    <Layout>
      <div className="columns" style={{ marginTop: 40 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">문제 제목</p>
            <input
              className="input"
              type="text"
              placeholder="제목을 입력하세요."
              value={submitData.title}
              onChange={(e) => setSubminData({ ...submitData, title: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">제한시간 (1000 = 1초)</p>
            <input
              className="input"
              type="number"
              placeholder="제한을 입력하세요."
              value={submitData.limit}
              onChange={(e) => setSubminData({ ...submitData, limit: e.target.value })}
            />
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">문제 설명</p>
            <textarea
              className="textarea"
              placeholder="문제 설명 입력"
              value={submitData.problem_info}
              onChange={(e) => setSubminData({ ...submitData, problem_info: e.target.value })}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">입력 설명</p>
            <textarea
              className="textarea"
              placeholder="입력 정보를 설명하세요"
              value={submitData.input_info}
              onChange={(e) => setSubminData({ ...submitData, input_info: e.target.value })}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">출력 설명</p>
            <textarea
              className="textarea"
              placeholder="출력 정보를 설명하세요"
              value={submitData.output_info}
              onChange={(e) => setSubminData({ ...submitData, output_info: e.target.value })}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">입출력 데이터 정의</p>
            <div>
              <p className="problem-data-title">입력</p>
              <table class="table" style={{width: "100%"}}>
                <thead>
                  <tr>
                    <th>이름</th> <th>유형</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div>
              <p className="problem-data-title">출력</p>
            </div>
          </div>
        </div>
      </div>

      {submitData.example_data.map((v, i) => (
        <div className="columns" key={i}>
          <div className="column is-offset-2-tablet is-4-tablet is-offset-1-mobile is-10-mobile">
            <div className="box container">
              <p className="problem-data-title">예제 데이터 입력 {i + 1}</p>
              <textarea
                className="textarea"
                placeholder="예제 입력 정보를 설명하세요"
                value={submitData.example_data[i].input}
                onChange={(e) =>
                  setSubminData({
                    ...submitData,
                    example_data: [
                      ...submitData.example_data.slice(0, i),
                      { input: e.target.value, output: submitData.example_data[i].output },
                      ...submitData.example_data.slice(i + 1),
                    ],
                  })
                }
              ></textarea>
            </div>
          </div>
          <div className="column is-4-tablet is-offset-1-mobile is-10-mobile">
            <div className="box container">
              <p className="problem-data-title">예제 데이터 출력 {i + 1}</p>
              <textarea
                className="textarea"
                placeholder="예제 입력 정보를 설명하세요"
                value={submitData.example_data[i].output}
                onChange={(e) =>
                  setSubminData({
                    ...submitData,
                    example_data: [
                      ...submitData.example_data.slice(0, i),
                      { input: submitData.example_data[i].input, output: e.target.value },
                      ...submitData.example_data.slice(i + 1),
                    ],
                  })
                }
              ></textarea>
            </div>
          </div>
        </div>
      ))}
      <div className="buttons is-centered">
        <button
          className="button is-success"
          onClick={() =>
            setSubminData({ ...submitData, example_data: [...submitData.example_data, { input: "", output: "" }] })
          }
        >
          예제 데이터 추가
        </button>

        <button
          className="button is-danger"
          onClick={() => setSubminData({ ...submitData, example_data: [...submitData.example_data.slice(0, -1)] })}
        >
          예제 데이터 삭제
        </button>
      </div>

      {submitData.judge_data.map((v, i) => (
        <div className="columns" key={i}>
          <div className="column is-offset-2-tablet is-4-tablet is-offset-1-mobile is-10-mobile">
            <div className="box container">
              <p className="problem-data-title">채점 데이터 입력 {i + 1}</p>
              <textarea
                className="textarea"
                placeholder="예제 입력 정보를 설명하세요"
                value={submitData.judge_data[i].input}
                onChange={(e) =>
                  setSubminData({
                    ...submitData,
                    judge_data: [
                      ...submitData.judge_data.slice(0, i),
                      { input: e.target.value, output: submitData.judge_data[i].output },
                      ...submitData.judge_data.slice(i + 1),
                    ],
                  })
                }
              ></textarea>
            </div>
          </div>
          <div className="column is-4-tablet is-offset-1-mobile is-10-mobile">
            <div className="box container">
              <p className="problem-data-title">채점 데이터 출력 {i + 1}</p>
              <textarea
                className="textarea"
                placeholder="예제 입력 정보를 설명하세요"
                value={submitData.judge_data[i].output}
                onChange={(e) =>
                  setSubminData({
                    ...submitData,
                    judge_data: [
                      ...submitData.judge_data.slice(0, i),
                      { output: e.target.value, input: submitData.judge_data[i].input },
                      ...submitData.judge_data.slice(i + 1),
                    ],
                  })
                }
              ></textarea>
            </div>
          </div>
        </div>
      ))}
      <div className="buttons is-centered">
        <button
          className="button is-success"
          onClick={() =>
            setSubminData({ ...submitData, judge_data: [...submitData.judge_data, { input: "", output: "" }] })
          }
        >
          채점 데이터 추가
        </button>
        <button
          className="button is-danger"
          onClick={() => setSubminData({ ...submitData, judge_data: [...submitData.judge_data.slice(0, -1)] })}
        >
          채점 데이터 삭제
        </button>
      </div>

      <div className="buttons is-centered">
        <button className="button is-info" onClick={() => submit()}>
          제출
        </button>
      </div>
    </Layout>
  )
  if (message === "success") {
    return make()
  } else
    return (
      <Layout>
        <div className="columns" style={{ marginTop: 20 }}>
          <div className="column is-offset-2-tablet is-8-tablet">
            <div className="box">{message === "" ? "로딩 중입니다.." : message}</div>
          </div>
        </div>
      </Layout>
    )
}

export default ProblemCreate
