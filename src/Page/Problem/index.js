import React, { useState, useEffect } from "react"
import Layout from "../../Component/Layout"
import { Link } from "react-router-dom"

import axios from "axios"
import { serverIP } from "../../lib/key"

import "./Problem.scss"

const Problem = ({ match }) => {
  const [data, setData] = useState({})
  useEffect(() => {
    const fetch = async () => {
      const fetchData = await axios.get(serverIP + "/problem/" + match.params.id)
      console.log(fetchData.data)
      setData(fetchData.data)
    }
    fetch()
  }, [match.params.id])

  const printInfo = (title, content) => (
    <div className="columns">
      <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
        <div className="box container">
          <p className="problem-data-title">{title}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
  const printExample = (v, i) => (
    <div className="columns" style={{ marginBottom: 30 }} key = {i}>
      <div className="column is-offset-2-tablet is-4-tablet is-offset-1-mobile is-10-mobile">
        <div className="box container">
          <p className="problem-data-title">예제 입력</p>
          <p>{v.input_example}</p>
        </div>
      </div>
      <div className="column is-4-tablet is-offset-1-mobile is-10-mobile">
        <div className="box container">
          <p className="problem-data-title">예제 출력</p>
          <p>{v.output_example}</p>
        </div>
      </div>
    </div>
  )

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{data.title}</h1>
            <h2 className="subtitle">{data.id}번</h2>
          </div>
        </div>
      </section>

      <div className="columns" style={{ marginTop: 30 }}>
        <div className="column problem-submit-button is-offset-8 is-2 is-offset-10-mobile is-1-mobile">
          <div className="button is-info is-light">
            <Link to={"/submit/" + match.params.id}>제출하기</Link>
          </div>
        </div>
      </div>

      {printInfo("문제", data.problem_info)}
      {printInfo("입력", data.input_info)}
      {printInfo("출력", data.output_info)}
      {data.Problem_examples && data.Problem_examples.map((v, i) => printExample(v, i))}

      <div className="columns" style={{ marginBottom: 30 }}>
        <div className="column is-offset-2-tablet is-4-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">예제 입력</p>
            <p>1 2</p>
          </div>
        </div>
        <div className="column is-4-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">예제 출력</p>
            <p>3</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Problem
