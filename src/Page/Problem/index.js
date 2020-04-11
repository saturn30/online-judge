import React from "react"
import Layout from "../../Component/Layout"

import "./Problem.scss"

const Problem = ({ match }) => {
  return (
    <Layout>
      <div className="">
        문제
        {match.params.id}
        <div>표</div>
        <div>문제</div>
        <div>입력</div>
        <div>출력</div>
        <div>
          <div>예제입력1</div>
          <div>예제출력1</div>
        </div>
        <div>
          <div>예제입력2</div>
          <div>예제출력2</div>
        </div>
      </div>
    </Layout>
  )
}

export default Problem
