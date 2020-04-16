import React, { useState } from "react"
import Layout from "../../Component/Layout"
import "./Submit.scss"

import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"

const Submit = ({ match }) => {
  const [code, setCode] = useState("function(a, b) {\n\tlet answer;\n\treturn answer;\n}")
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
      <div className="buttons is-centered" style={{marginBottom: 20}}>
        <div className="button is-success">제출하기</div>
      </div>
    </Layout>
  )
}

export default Submit
