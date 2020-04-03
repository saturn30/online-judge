import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <div id="logo">
                <Link to="/">JS online-judge</Link>
            </div>
            <div id="menu">
                <Link to="/workbook">문제집</Link>
                <Link to="/problem">문제</Link>
                <Link to="/mypage">내정보</Link>
            </div>
        </div>
    )
}

export default Header
