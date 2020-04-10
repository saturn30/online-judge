import React from "react"
import Layout from "../../Component/Layout"

import "./Login.scss"

const Login = () => {
  return (
    <Layout>
      <div className="login-box">
        <div className="login-item">로그인</div>
        <div className="login-item">
          <div className="login-input">
            <div className="login-label">아이디</div>
            <input type="text" name="name" />
          </div>
        </div>
        <div className="login-item">
          <div className="login-input">
            <div className="login-label">비밀번호</div>
            <input type="text" name="name" />
          </div>
        </div>
        <div className="login-item">
          <button>회원가입</button>
          <button>로그인</button>
        </div>
      </div>
    </Layout>
  )
}

export default Login
