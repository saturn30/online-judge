import React, { useEffect, useState } from "react"
import Layout from "../../Component/Layout"
import axios from "axios"
import { serverIP } from "../../lib/key"
import { useCookies } from "react-cookie"

const ProblemCreate = () => {
  const [cookies] = useCookies(["token"])
  const [message, setMessage] = useState("")
  useEffect(() => {
    const checkadmin = async () => {
      const res = await axios.post(
        serverIP + "/auth/checkadmin",
        {},
        {
          headers: { Authorization: cookies.token },
        }
      )
      console.log(res.data.message)
      setMessage(res.data.message)
    }
    checkadmin()
  }, [cookies])
  return (
    <Layout>
      <div className="columns" style={{ marginTop: 20 }}>
        <div className="column is-offset-2-tablet is-8-tablet">
          <div className="box">
            {message === "" ? "로딩 중입니다.." : message === "success" ? "success" : message}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProblemCreate
