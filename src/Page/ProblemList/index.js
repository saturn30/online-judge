import React, { useEffect, useState } from "react"
import Layout from "../../Component/Layout"
import axios from "axios"
import { serverIP } from "../../lib/key"
//import { useCookies } from "react-cookie"

import { Link } from "react-router-dom"

import "./ProblemList.scss"

const ProblemList = () => {
  //const [cookies] = useCookies(["token"]) - 나중에 유저 정답여부 확인
  const [page, setPage] = useState(0)
  const [data, setData] = useState({})

  useEffect(() => {
    const fetch = async () => {
      const fetchData = await axios.get(serverIP + "/problem/list/" + page)
      setData(fetchData.data)
    }
    fetch()
  }, [page])

  const pageButton = () => {
    const arr = []
    for(let i = 0; i < data.count / 15; i++){
      if(arr.length >=5) break;
      if(i < page - 2) continue;
      arr.push(i);
    }
    return arr.map((v, i) => 
    <li key={i}>
      <div className={`pagination-link ${page === v ? "is-current" : null}`} onClick={() => setPage(v)}>
        {v + 1}
      </div>
    </li>)
  }

  return (
    <Layout>
      <div className="columns" style={{ marginTop: 20 }}>
        <div className="column is-offset-2-tablet is-8-tablet">
          <div className="box">
            <div className="table-container">
              <div className="container">
                <div className="is-pulled-left">전체 문제 목록</div>
                <div className="is-pulled-right">
                  <Link to="/problemcreate">문제 생성하기</Link>
                </div>
              </div>
              <table className="table is-hoverable is-fullwidth problem-list-table">
                <thead>
                  <tr>
                    <th>문제번호</th>
                    <th>제목</th>
                    <th>제출</th>
                    <th>정답율</th>
                    <th>내정보</th>
                  </tr>
                </thead>
                <tbody>
                  {!data.count
                    ? null
                    : data.rows.map((v, i) => (
                        <tr key={i}>
                          <td>{v.id}</td>
                          <td>
                            <Link to={"/problem/" + v.id}>
                              <span>{v.title}</span>
                            </Link>
                          </td>
                          <td>{v.total_submit}</td>
                          <td>{v.total_submit ? v.total_hit / v.total_submit : 0} %</td>
                          <td>정답</td>
                        </tr>
                      ))}
                </tbody>
              </table>
              <div>
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                  <div className="pagination-previous" onClick={() => setPage(page - 1 >= 0 ? page - 1 : page)}>
                    Previous
                  </div>
                  <div
                    className="pagination-next"
                    onClick={() => setPage(page + 1 < data.count / 15 ? page + 1 : page)}
                  >
                    Next page
                  </div>
                  <ul className="pagination-list">
                    {pageButton()}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProblemList
