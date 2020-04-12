import React from "react"
import Layout from "../../Component/Layout"

import "./Problem.scss"

const Problem = ({ match }) => {
  return (
    <Layout>
      <div className="problem-content">
        문제
        {match.params.id}
        <div>표</div>
        <div className="problem-data-box">
          <div className="problem-data-title">문제</div>
          <div className="problem-data-content">내용</div>
        </div>
        <div className="problem-data-box">
          <div className="problem-data-title">입력</div>
          <div className="problem-data-content">내용</div>
        </div>
        <div className="problem-data-box">
          <div className="problem-data-title">출력</div>
          <div className="problem-data-content">내용</div>
        </div>
        <div className="problem-data-box">
          <div>예제입력1</div>
          <div>예제출력1</div>
        </div>
        <div className="problem-data-box">
          <div>예제입력2</div>
          <div>예제출력2</div>
        </div>
      </div>
    </Layout>
  )
}

export default Problem
