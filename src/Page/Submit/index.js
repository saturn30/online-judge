import React, { useState } from "react"
import Layout from "../../Component/Layout"
import { useCookies } from "react-cookie"
import "./Submit.scss"

import axios from "axios"
import { serverIP } from "../../lib/key"

import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"

const Submit = ({ match }) => {
  const [code, setCode] = useState("function solve(input) {\n\tlet answer = [];\n\n\treturn answer;\n}")
  const [cookies] = useCookies(["token"])

  const onclickSubmit = async () => {
    console.log('발사~')
    const res = await axios.post(serverIP + "/submit/judge", { code, ProblemId: match.params.id }, { headers: { Authorization: cookies.token } })
    console.log(res)
  }

  return (
    <Layout>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">A + B</h1>
            <h2 className="subtitle">{match.params.id}번</h2>
          </div>
        </div>
      </section>

      <div className="columns" style={{ marginTop: 30 }}>
        <div className="column is-offset-2-tablet is-8-tablet is-12-mobile">
          <AceEditor
            mode="javascript"
            theme="monokai"
            value={code}
            onChange={(text) => setCode(text)}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            showPrintMargin={false}
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="buttons is-centered" style={{ marginBottom: 20 }}>
        <div className="button is-success" onClick={onclickSubmit}>
          제출하기
        </div>
      </div>
    </Layout>
  )
}

export default Submit
