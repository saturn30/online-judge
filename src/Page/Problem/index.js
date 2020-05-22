import React, { useState, useEffect } from "react"
import Layout from "../../Component/Layout"
import Submit from "../../Component/Submit"
import { useCookies } from "react-cookie"

import axios from "axios"
import { serverIP } from "../../lib/key"

import "./Problem.scss"

const Problem = ({ match }) => {
  const [data, setData] = useState({})
  const [cookies] = useCookies(["token"])
  const [submitData, setSubmitData] = useState({})
  useEffect(() => {
    const fetch = async () => {
      const fetchData = await axios.get(serverIP + "/problem/" + match.params.id)
      setData(fetchData.data)
    }
    fetch()
  }, [match.params.id])

  useEffect(() => {
    const fetch = async () => {
      const fetchData = await axios.post(
        serverIP + "/problem/getUserSubmit",
        { ProblemId: match.params.id },
        {
          headers: { Authorization: cookies.token },
        }
      )
      console.log(fetchData.data)
      setSubmitData(fetchData.data)
    }
    fetch()
  }, [])

  const printInfo = (title, content) => (
    <div className="columns">
      <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
        <div className="box container">
          <p className="problem-data-title">{title}</p>
          {content && content.split("\n").map((v, i) => <p key={i}>{v.trim()}</p>)}
        </div>
      </div>
    </div>
  )
  const printExample = (v, i) => {
    return (
      <div className="columns" style={{ marginBottom: 30 }} key={i}>
        <div className="column is-offset-2-tablet is-4-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">예제 입력 {i + 1}</p>
            <pre>
              [{"\n"}"{v.input_example.replace(/\n/g, '",\n"')}"{"\n"}]
            </pre>
          </div>
        </div>
        <div className="column is-4-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">예제 출력 {i + 1}</p>
            <pre>
              [{"\n"}"{v.output_example.replace(/\n/g, '",\n"')}"{"\n"}]
            </pre>
          </div>
        </div>
      </div>
    )
  }

  const printSubmit = () => {
    if (!Array.isArray(submitData) || !submitData.length) return <div style={{marginTop: 30}}></div>
    return (
      <div className="columns" style={{ marginTop: 30, marginBottom: 30 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">채점기록</p>
            <table className="table is-hoverable" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th className="is-1">번호</th>
                  <th className="is-2">결과</th>
                  <th className="is-1">코드길이</th>
                  <th className="is-1">제출날짜</th>
                </tr>
              </thead>
              <tbody>
                {submitData.map((v, i) => {
                  const date = new Date(v.createdAt)
                  return (
                    <React.Fragment key={i}>
                      <tr
                        onClick={() =>
                          setSubmitData([
                            ...submitData.slice(0, i),
                            { ...v, toggle: !v.toggle },
                            ...submitData.slice(i + 1),
                          ])
                        }
                      >
                        <td>{i+1}</td>
                        <td>
                          {v.done ? v.solved ? (
                            <span style={{ color: "green", fontWeight: "bold" }}>정답입니다</span>
                          ) : (
                            <span style={{ color: "red", fontWeight: "bold" }}>오답입니다</span>
                          ) : 
                          <span style={{ color: "gold", fontWeight: "bold" }}>채점 중입니다..</span>}
                        </td>
                        <td>{v.code.length}</td>
                        <td>
                          {date.getFullYear() % 100}-{date.getMonth() + 1}-{date.getDate()} / {date.getHours()}:
                          {date.getMinutes()}
                        </td>
                      </tr>
                      {v.toggle && (
                        <tr>
                          <td colSpan={4}>
                            <div>
                              <table className="table" style={{ marginTop: 15, marginBottom: 15, width: "100%" }}>
                                <thead>
                                  <tr>
                                    <th style={{ width: "30%" }}>테스트케이스</th>
                                    <th style={{ width: "40%" }}>결과</th>
                                    <th style={{ width: "30%" }}>시간</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {v.Submit_results.map((judge_v, judge_i) => (
                                    <tr key={judge_i}>
                                      <td>{judge_i + 1} 번</td>
                                      <td>{judge_v.result}</td>
                                      <td>{judge_v.time !== null ? judge_v.time + " ms" : "-"}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  const isSolved = () => {
    if (!Array.isArray(submitData) || !submitData.length) return "is-dark"
    let solved = false
    submitData.forEach((v) => {
      if (v.solved) solved = true
    })
    return solved ? "is-success" : "is-danger"
  }

  return (
    <Layout>
      <section className={"hero " + isSolved()}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{data.title}</h1>
            <h2 className="subtitle">{data.id}번</h2>
          </div>
        </div>
      </section>

      {printSubmit()}
      {printInfo("제한시간", data.limit + " ms")}
      {printInfo("문제", data.problem_info)}
      {printInfo("입력", data.input_info)}
      {printInfo("출력", data.output_info)}
      {data.Problem_examples && data.Problem_examples.map((v, i) => printExample(v, i))}

      <div className="columns" style={{ marginTop: 50 }}>
      <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <article className="message is-danger">
            <div className="message-header">
              <p>주의</p>
            </div>
            <div className="message-body">
              <p>- 세미콜론 필수</p>
              <p>- 입력 데이터 input은 예제 데이터 형식의 배열입니다.</p>
              <p>- 출력 데이터 예제와 같이 배열형태의 answer를 리턴해주세요.</p>
            </div>
          </article>
        </div>
      </div>
      <Submit ProblemId={match.params.id} />
    </Layout>
  )
}

export default Problem
