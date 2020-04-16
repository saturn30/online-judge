import React from "react"
import Layout from "../../Component/Layout"
import {Link} from 'react-router-dom'

import "./Problem.scss"

const Problem = ({ match }) => {
  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">A + B</h1>
            <h2 className="subtitle">1001번</h2>
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

      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">문제</p>
            <p>두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.</p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">입력</p>
            <p>첫째 줄에 A와 B가 주어진다.</p>
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="problem-data-title">출력</p>
            <p>첫째 줄에 A+B를 출력한다.</p>
          </div>
        </div>
      </div>
      <div className="columns" style={{marginBottom: 30}}>
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
