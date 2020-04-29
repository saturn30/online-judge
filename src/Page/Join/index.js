import React, { useState } from "react"
import Layout from "../../Component/Layout"
import axios from "axios"

import {serverIP} from '../../lib/key'

const Join = () => {
  const [ID, setID] = useState("")
  const [pw, setPw] = useState("")
  const [pwCheck, setPwCheck] = useState("")

  const submit = async () => {
    if (ID.length >= 4 && pw.length >= 6 && pw === pwCheck) {
      const res = await axios.post(serverIP + '/auth/join', {ID, pw})
      console.log(res.data)
      if(res.data === 'exist') alert('이미 존재하는 아이디입니다.')
      else {
        alert('가입이 완료되었습니다.')
        document.location.href = '/';
      }
    } else {
      alert("입력조건을 확인해 주세요.")
    }
  }

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
                <input
                  className={ID === "" ? "input" : "input " + (ID.length >= 4 ? "is-success" : "is-danger")}
                  type="text"
                  placeholder="아이디를 입력하세요."
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                {ID === "" ? null : ID.length >= 4 ? (
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                ) : (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              <p className={"help " + (ID.length >= 4 ? "is-success" : "is-danger")}>4자 이상 입력해주세요.</p>
            </div>

            <div className="field">
              <label className="label">패스워드</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={pw === "" ? "input" : "input " + (pw.length >= 6 ? "is-success" : "is-danger")}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                {pw === "" ? null : pw.length >= 6 ? (
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                ) : (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              <p className={"help " + (pw.length >= 6 ? "is-success" : "is-danger")}>6자 이상 입력해주세요.</p>
            </div>

            <div className="field">
              <label className="label">패스워드 확인</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={
                    pwCheck === ""
                      ? "input"
                      : "input " + (pw.length >= 6 && pw === pwCheck ? "is-success" : "is-danger")
                  }
                  type="password"
                  placeholder="Email input"
                  value={pwCheck}
                  onChange={(e) => setPwCheck(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-key"></i>
                </span>
                {pwCheck === "" ? null : pw.length >= 6 && pw === pwCheck ? (
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                ) : (
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                )}
              </div>
              <p className={"help " + (pw.length > 6 && pw === pwCheck ? "is-success" : "is-danger")}>
                {pw.length >= 6 && pw === pwCheck ? "" : "비밀번호가 일치하지 않습니다."}
              </p>
            </div>

            <div className="buttons is-centered">
              <div
                className="button is-light"
                onClick={() => {
                  setID("")
                  setPw("")
                  setPwCheck("")
                }}
              >
                초기화
              </div>
              <div className="button is-info" onClick={submit}>
                가입
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Join
