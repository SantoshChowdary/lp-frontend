import React, {useState} from 'react'
import { Header } from '../../../../../Header'
import WebCodeEditor from '../WebEditor'
import JSConsoleOutput from '../Editors/JAVASCRIPTCodeEditor/consoleOutput'
// import PythonOutput from '../Editors/PythonCodeEditor/main'

import Select from 'react-select'
import "./index.css"

export const ReactAceEditor = () => {
  const [enableRunButton, setRunButtonVisibleStatus] = useState(true);

  const options = [
    {
      value : "Web", label : "Web", id : "WEB", enableRunButton : false
    },
    {
      value : "JAVASCRIPT", label : "JAVASCRIPT", id : "JAVASCRIPT", enableRunButton : true
    }
    // ,
    // {
    //   value : "Python", label : "Python", id : "PYTHON", enableRunButton : true 
    // }
  ]

  const [activeTabId, setActiveTabId] = useState<string | undefined>(options[0].id);

  const getCodeEditor = () => {
    switch (activeTabId) {
      case options[0].id:
        return <WebCodeEditor />
      case options[1].id:
        return <JSConsoleOutput />
      // case options[2].id:
      //   return <PythonOutput />
      default:
        return <WebCodeEditor />
    }
  }

  return (
    <div className="react-ace-editor-main">
        <Header />
        {
          getCodeEditor()
        }

        <div className='select-lang-block'>
          <Select
            onChange={e => setActiveTabId(e?.id)}
            options={options}
            defaultValue={options[0]} 
            isSearchable={false}
            className='react-editor-select'
            styles={{
              menu : (provided, state) => ({
                ...provided,
                top : "auto",
                bottom : 30,
              })
            }}
          />
          {/* <button style={{display : enableRunButton ? "block" : "none"}} className='run-button' onClick={()=>console.log("clicked")}>
            Run
          </button> */}
        </div>
    </div>
  )
}

export default ReactAceEditor