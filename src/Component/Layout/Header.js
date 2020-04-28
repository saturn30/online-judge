import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useCookies } from "react-cookie"

const Header = () => {
  const [toggleBugger, setToggleBugger] = useState(false)
  const [cookies, , removeCookie] = useCookies(["token"])
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/" style={{ color: "black" }}>
            JS online-judge
          </Link>
        </div>
        <div role="button" className="navbar-burger" onClick={() => setToggleBugger(!toggleBugger)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div id="navMenu" className={toggleBugger ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link className="menu_item" to="/problemlist" style={{ color: "black" }}>
              문제목록
            </Link>
          </div>

          <div className="navbar-item">
            <Link className="menu_item" to="/mypage" style={{ color: "black" }}>
              내정보
            </Link>
          </div>
          <div className="navbar-item"></div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!cookies.token ? (
                <div>
                  <div className="button is-primary">
                    <Link className="menu_item" to="/join" style={{ color: "white", fontWeight: "bold" }}>
                      회원가입
                    </Link>
                  </div>

                  <div className="button is-light">
                    <Link className="menu_item" to="/login">
                      로그인
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="button is-primary" onClick={() => removeCookie("token")}>
                  로그아웃
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
