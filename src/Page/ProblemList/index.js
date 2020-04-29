import React from "react"
import Layout from "../../Component/Layout"

import { Link } from "react-router-dom"

import "./ProblemList.scss"

const ProblemList = () => {
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
                  <tr>
                    <td>1001</td>
                    <td>
                      <Link to="/problem/1001">
                        <span>A+B</span>
                      </Link>
                    </td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                  <tr>
                    <td>1001</td>
                    <td>A+B</td>
                    <td>100</td>
                    <td>40%</td>
                    <td>정답</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                  <div className="pagination-previous">Previous</div>
                  <div className="pagination-next">Next page</div>
                  <ul className="pagination-list">
                    <li>
                      <div className="pagination-link" aria-label="Goto page 1">
                        1
                      </div>
                    </li>
                    <li>
                      <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                      <div className="pagination-link" aria-label="Goto page 45">
                        45
                      </div>
                    </li>
                    <li>
                      <div className="pagination-link is-current" aria-label="Page 46" aria-current="page">
                        46
                      </div>
                    </li>
                    <li>
                      <div className="pagination-link" aria-label="Goto page 47">
                        47
                      </div>
                    </li>
                    <li>
                      <span className="pagination-ellipsis">&hellip;</span>
                    </li>
                    <li>
                      <div className="pagination-link" aria-label="Goto page 86">
                        86
                      </div>
                    </li>
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
