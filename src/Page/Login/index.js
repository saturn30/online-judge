import React, { useState } from "react"
import Layout from "../../Component/Layout"
import { Link } from "react-router-dom"
import axios from "axios"
import { useCookies } from 'react-cookie';

import { serverIP } from "../../lib/key"
import "./Login.scss"

const Login = () => {
  const [id, setId] = useState("")
  const [pw, setPw] = useState("")
  const [, setCookie] = useCookies(['token'])

  const submit = async () => {
    const res = await axios.post(serverIP + "/auth/login", { id, pw })
    console.log(res.data)
    if (res.data.message === "success") {
      setCookie('token', res.data.token)
      document.location.href = "/"
    } else {
      alert(res.data.message)
    }
  }

  return (
    <Layout>
      <div className="columns">
        <div className="column is-offset-4-desktop is-4-desktop is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
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
                      <input className="input" type="text" value={id} onChange={(e) => setId(e.target.value)} />
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
                      <input className="input" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-buttons">
              <button className="button is-primary">
                <Link style={{ color: "white" }} to="/join">
                  회원가입
                </Link>
              </button>
              <button className="button is-link" onClick={submit}>
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
