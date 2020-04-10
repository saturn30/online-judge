import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <div id="logo">
                <Link to="/">JS online-judge</Link>
            </div>
            <div id="menu">
                <Link className="menu_item" to="/problemlist">문제목록</Link>
                <Link className="menu_item" to="/mypage">내정보</Link>
                <Link className="menu_item" to="/login">로그인</Link>
            </div>
        </div>
    )
}

export default Header
