import React, { useState } from "react"
import { useCookies } from "react-cookie"
import "./Submit.scss"

import axios from "axios"
import { serverIP } from "../../lib/key"

import AceEditor from "react-ace"

import "ace-builds/src-noconflict/mode-javascript"
import "ace-builds/src-noconflict/theme-monokai"

const Submit = ({ ProblemId }) => {
  const [code, setCode] = useState("function solve(input) {\n\tlet answer = [];\n\n\treturn answer;\n}")
  const [cookies] = useCookies(["token"])

  const onclickSubmit = async () => {
    const res = await axios.post(serverIP + "/submit/judge", { code, ProblemId }, { headers: { Authorization: cookies.token } })
    window.location.reload();
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Submit
