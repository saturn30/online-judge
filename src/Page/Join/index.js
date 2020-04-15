import React from "react"
import Layout from "../../Component/Layout"

const Join = () => {
  return (
    <Layout>
      <div className="columns" style={{ marginTop: 100 }}>
        <div className="column is-offset-3-desktop is-half-desktop is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="box container">
            <p className="has-text-centered" style={{ fontSize: "1.5rem" }}>
              <strong>회원가입</strong>
            </p>

            <div className="field">
              <label className="label">아이디</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help is-success">This username is available</p>
            </div>

            <div className="field">
              <label className="label">패스워드</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="field">
              <label className="label">패스워드 확인</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle"></i>
                </span>
              </div>
              <p className="help is-danger">This email is invalid</p>
            </div>

            <div className="buttons is-centered">
              <div className="button is-light">초기화</div>
              <div className="button is-info">가입</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Join
