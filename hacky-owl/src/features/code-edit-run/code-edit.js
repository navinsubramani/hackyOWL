// Import react dependency
import React from 'react'
import './code-edit-run.css'

// Import the Redux
import { UPDATE_EDITOR_VALUE, UPDATE_EDITOR_LANG, RESET_EDITOR_VALUE, UPDATE_EXAMPLE_CODE } from './codeSlice'
import { useDispatch, useSelector } from 'react-redux';

// Import CodeMirror dependency
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python'
import { historyField } from '@codemirror/commands';
// // CodeMirror 3rd party package from https://uiwjs.github.io/react-codemirror/
import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { materialLight } from '@uiw/codemirror-theme-material'
import { eclipse } from '@uiw/codemirror-theme-eclipse'

// UI Elements
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { RefreshButton, SolutionButton } from '../../component/Custom-Buttons'

// Import the run Dependency
import runProgram from './run-program'

// Defining the extensions for the CodeMirror
const stateFields = { history: historyField };
const executeCodeObj = new runProgram()

const getLangExtension = (lang) => {
    switch(lang) {
        case "javascript":
            return [javascript({ jsx: true })]
        case "python":
            return [python()]
        default:
            return []
        }
    }

// Defining the Container Component
function CodeEdit() {

    // Get the editer values & state from localStorage
    const editorState = useSelector((state) => state.code.editorState)
    const editorValue = useSelector((state) => state.code.editorValue)
    const editorLang = useSelector((state) => state.code.editorLang)
    const supportedLang = useSelector((state) => state.code.supportedLang)
    const dispatch = useDispatch()

    const editorExtensions = getLangExtension(editorLang)

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

    // Define the codeReload Event
    const onReloadClick = React.useCallback((event) => {
            dispatch(RESET_EDITOR_VALUE())        
    })

    // Define the Example Code Event
    const onExampleCodeClick = React.useCallback((event) => {
            dispatch(UPDATE_EXAMPLE_CODE())        
    })
    

    //console.log("code-edit-run refreshed..", editorExtensions)

    // Render the Code Editor
    return (
        <div className='CodeEditorParent'>
            <div className='CodeEditorHeader'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 180 }} size="small">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={editorLang}
                        onChange={onEditorLangChange}
                    >
                        {
                            // Create menu item based on the supported language list
                            supportedLang.map((lang)=> <MenuItem key={lang} value={lang}>{lang}</MenuItem>)
                        }
                    </Select>
                </FormControl>
                <RefreshButton onClick={onReloadClick}/>
                <SolutionButton onClick={onExampleCodeClick}/>
            </div>
            
            <div className='EditorAndConsole'>
                <div className='CodeEditor'>
                    <CodeMirror
                        value={editorValue}
                        initialState={editorState
                            ?{
                                json: JSON.parse(editorState),
                                fields: stateFields
                            }:undefined
                        }
                        height="100%"
                        theme={materialLight}
                        extensions={editorExtensions}
                        onChange={onEditorValueChange}
                            />
                </div>
            </div>

        </div>

    );
  }
  export default CodeEdit;


  // References
  // https://www.npmjs.com/package/@uiw/react-codemirror
  // https://raw.githack.com/uiwjs/react-codemirror/doc3/index.html
  // https://uiwjs.github.io/react-codemirror/#/