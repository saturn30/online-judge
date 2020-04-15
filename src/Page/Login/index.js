import React from "react"
import Layout from "../../Component/Layout"

import "./Login.scss"

const Login = () => {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-offset-3-desktop is-half-desktop is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box" style={{ marginTop: 150 }}>
            <div className="container">
              <p className="has-text-centered login-title">
                <strong>로그인</strong>
              </p>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">ID : </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className="input" type="text" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">PW : </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className="input" type="password" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-buttons">
              <button className="button is-primary">회원가입</button>
              <button className="button is-link">로그인</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
