import React from "react"
import Layout from "../../Component/Layout"

import {Link} from 'react-router-dom'

import "./ProblemList.scss"

const ProblemList = () => {
  return (
    <Layout>
        <div>전체 문제 목록</div>
        <div className="table">
            <div className="table-row">
                <div className="table-cell">문제 번호</div>
                <div className="table-cell table-title">제목</div>
                <div className="table-cell">정보</div>
            </div>
            <div className="table-row">
                <div className="table-cell">1000</div>
                <div className="table-cell table-title"><Link to="/problem/1000">A+B</Link></div>
                <div className="table-cell">정답</div>
            </div>
            <div className="table-row">
                <div className="table-cell">1001</div>
                <div className="table-cell table-title">A-B</div>
                <div className="table-cell">오답</div>
            </div>
            <div className="table-row">
                <div className="table-cell">1002</div>
                <div className="table-cell table-title">A/B</div>
                <div className="table-cell"></div>
            </div>
        </div>
    </Layout>
  )
}

export default ProblemList
