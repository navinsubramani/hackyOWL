// Import react dependency
import React from 'react'

// Import the Redux
import { UPDATE_EDITOR_VALUE, UPDATE_CONSOLE_VALUE, UPDATE_EDITOR_LANG } from './codeSlice'
import { useDispatch, useSelector } from 'react-redux';

// Import CodeMirror dependency
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python'
import { historyField } from '@codemirror/commands';
// // CodeMirror 3rd party package from https://uiwjs.github.io/react-codemirror/
import CodeMirror from '@uiw/react-codemirror'
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula'
import { materialLight } from '@uiw/codemirror-theme-material'

// UI Elements
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';

// Import the run Dependency
import runPython from './run-python'
import runJavascript from './run-javascript';

// Defining the extensions for the CodeMirror
let editorExtensions = []
const stateFields = { history: historyField };
const pythonObj = new runPython()
const javascriptObj = new runJavascript()

// Defining the Container Component
function CodeEditRun() {

    // Get the editer values & state from localStorage
    const editorState = useSelector((state) => state.code.editorState)
    const editorValue = useSelector((state) => state.code.editorValue)
    const consoleValue = useSelector((state) => state.code.consoleValue)
    const editorLang = useSelector((state) => state.code.editorLang)
    const dispatch = useDispatch()

    // Define the onEditorLanguageChange Event
    const onEditorLangChange = React.useCallback((event) => {
        dispatch(UPDATE_EDITOR_LANG(event.target.value))
    })

    // Define the onEditorValueChange Event
    const onEditorValueChange = React.useCallback((value, viewUpdate) => {
      const state = JSON.stringify(viewUpdate.state.toJSON(stateFields));
      dispatch(UPDATE_EDITOR_VALUE({
            value: value,
            viewUpdateState: state
        }))
    }, []);

    // Define the runOnClick Event
    const onRunClick = React.useCallback((event) => {
        
        if(editorLang === "python") {
            let output = pythonObj.evaluate(editorValue)
            console.log("Object (maybe a Promise)...")
            output.then(output => {
                output = ">>> "+ String(output)
                console.log("<<<" , output, ">>>")
                dispatch(UPDATE_CONSOLE_VALUE(output))
                })
        }
        else {
            let output = javascriptObj.evaluate(editorValue)
            console.log("Value...")
            output = ">>> "+ String(output)
            dispatch(UPDATE_CONSOLE_VALUE(output))
        }
        
    })

    //javascript({ jsx: true }) for Js & python() for py
    if (editorLang === "python") {
        editorExtensions = [python()]
    }
    else {
        editorExtensions = [javascript({ jsx: true })]
    }

    console.log("code-edit-run...", editorExtensions)

    // Render the Code Editor
    return (
        <div>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={editorLang}
                onChange={onEditorLangChange}
            >
                <MenuItem value={"python"}>Python</MenuItem>
                <MenuItem value={"javascript"}>Javascript</MenuItem>
            </Select>
            <CodeMirror
                value={editorValue}
                initialState={editorState
                    ?{
                        json: JSON.parse(editorState),
                        fields: stateFields
                    }:undefined
                }
                height="30rem"
                theme={dracula}
                extensions={editorExtensions}
                onChange={onEditorValueChange}
                    />
            <button onClick={onRunClick}>Run</button>
            <CodeMirror 
                value={consoleValue}
                readOnly={true}
                placeholder={"Output Console..."}
                basicSetup={{
                    lineNumbers: false,
                    foldGutter: false,
                    highlightActiveLine: false
                }}
                height="20rem"
                theme={materialLight}
                />
        </div>

    );
  }
  export default CodeEditRun;


  // References
  // https://www.npmjs.com/package/@uiw/react-codemirror
  // https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html
  // https://uiwjs.github.io/react-codemirror/#/