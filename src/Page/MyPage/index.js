import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Component/Layout"
import axios from "axios"
import { serverIP } from "../../lib/key"
import { useCookies } from "react-cookie"

import "./MyPage.scss"

const MyPage = () => {
  const [cookies] = useCookies(["token"])
  const [data, setData] = useState({})
  useEffect(() => {
    const fetch = async () => {
      const data = (await axios.get(serverIP + "/myPage", { headers: { Authorization: cookies.token } })).data
      console.log(data)
      setData(data)
    }
    fetch()
  }, [])
  if (data.message !== "success") {
    return (
      <Layout>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <p className="title has-text-centered" style={{ marginTop: 200 }}>
            로그인이 필요합니다.
          </p>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="columns" style={{ marginTop: 30 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-offset-1-mobile is-10-mobile">
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">토탈 제출</p>
                <p className="title">{data.total_submit}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">맞은 문제</p>
                <p className="title">{data.solved_arr.length}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">틀린문제</p>
                <p className="title">{data.wrong_arr.length}</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">정답율</p>
                <p className="title">
                  {data.total_submit ? Math.floor((data.solved_arr.length / data.total_submit) * 100) : 0} %
                </p>
              </div>
            </div>
          </div>

          <div className="box container" style={{ marginTop: 50 }}>
            <p>맞은 문제</p>
            <p style={{ margin: 10 }}>
              {data.solved_arr.map((v, i) => (
                  <Link key={i} to={"/problem/" + v}><span  style={{color: 'green', fontWeight: 'bold'}}> { v } </span></Link>
              ))}
            </p>
          </div>
          <div className="box container" style={{ marginTop: 50 }}>
            <p>틀린 문제</p>
            <p style={{ margin: 10 }}>
              {data.wrong_arr.map((v, i) => (
                  <Link key={i} to={"/problem/" + v}><span  style={{color: 'red', fontWeight: 'bold'}}> { v } </span></Link>
              ))}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyPage
