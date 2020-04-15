import React from "react"
import Layout from "../../Component/Layout"

import "./MyPage.scss"

const MyPage = () => {
  return (
    <Layout>
      <div className="columns" style={{ marginTop: 30 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">토탈 제출</p>
                <p className="title">33</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">맞은 문제</p>
                <p className="title">11</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">틀린문제</p>
                <p className="title">23</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">정답율</p>
                <p className="title">38%</p>
              </div>
            </div>
          </div>

          <div className="box container" style={{ marginTop: 50 }}>
            <p>맞은문제</p>
            <p>1001 1002 1003 1004</p>
          </div>
          <div className="box container" style={{ marginTop: 50 }}>
            틀린문제
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyPage
