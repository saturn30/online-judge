import React from "react"
import Layout from "../../Component/Layout"

import "./Problem.scss"

const Problem = ({ match }) => {
  return (
    <Layout>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">A + B</h1>
            <h2 class="subtitle">1001번</h2>
          </div>
        </div>
      </section>
      <div className="columns" style={{ marginTop: 30 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p>
              문제
            </p>
            <p>
            두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
            </p>
          </div>
        </div>
      </div>
      <div className="columns" style={{ marginTop: 10 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p>
              입력
            </p>
            <p>
              첫째 줄에 A와 B가 주어진다.
            </p>
          </div>
        </div>
      </div>
      <div className="columns" style={{ marginTop: 10 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p>
              출력
            </p>
            <p>
            첫째 줄에 A+B를 출력한다.
            </p>
          </div>
        </div>
      </div>
      <div className="columns" style={{ marginTop: 10 }}>
        <div className="column is-offset-2-tablet is-4-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p>
              예제 입력
            </p>
            <p>
              1 2
            </p>
          </div>
        </div>
        <div className="column is-4-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p>
              예제 출력
            </p>
            <p>
              3
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Problem
