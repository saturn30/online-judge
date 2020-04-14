import React from "react"
import Layout from "../../Component/Layout"

import "./Login.scss"

const Login = () => {
  return (
    <Layout>
      <div className="columns">
        <div className="column is-offset-3-desktop is-half-desktop is-offset-2-tablet is-8-tablet">
          <div className="box" style={{ marginTop: 100 }}>
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
                      <input className="input" type="text" readonly />
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
                      <input className="input" type="password" readonly />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="login-buttons">
              <button class="button is-primary">회원가입</button>
              <button class="button is-link">로그인</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
