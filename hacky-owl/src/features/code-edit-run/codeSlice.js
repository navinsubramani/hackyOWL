import { createSlice } from '@reduxjs/toolkit';

// Define Initial State
const supportedLang = ['javascript', 'python','java (not supported)', 'go (not supported)']
const editorLang = supportedLang[0]
const templateCode = {
                    // Placeholders
                    javascript: {
                        starterCode: `function sum(a,b) { return a + b}
sum(10, 23)`,
                        headCode: ``,
                        callCode: ``
                        },
                    python: {
                        starterCode: `def sum(a,b):
    return a+ b
sum(30, 40)`,
                        headCode: ``,
                        callCode: ``
                        }}
//editorValue: localStorage.getItem('editorValue') || ''
const defaultEditorValue = '// no template code provided'
let editorValue = defaultEditorValue
try {
    editorValue = templateCode[editorLang].starterCode
}
catch(err) {
    // ignore
}

const initialState = {
    // Supported langauges
    supportedLang,
    editorLang,
    templateCode,

    // Get the initial State from the localStorage
    //editorValue: localStorage.getItem('editorValue') || '',
    editorValue,
    editorState: localStorage.getItem('editorState')  || '',
    consoleValue: "",
}


// Slicer
export const codeSlice = createSlice({
    name: "code-edit-run",
    initialState,
    reducers: {
        UPDATE_EDITOR_VALUE: (state, action) => {
            state.editorValue = action.payload.value
            state.editorState = action.payload.viewUpdateState

            // Store the editor Value to the local Storage
            //localStorage.setItem('editorValue', action.payload.value)
            localStorage.setItem('editorState', action.payload.viewUpdateState)
            console.log(action)
        },

        UPDATE_CONSOLE_VALUE: (state, action) => {
            state.consoleValue = action.payload
            console.log(action.payload)
        },

        UPDATE_EDITOR_LANG: (state, action) => {
            state.editorLang = action.payload
            // Reset console for different language
            try {
                state.editorValue = state.templateCode[state.editorLang].starterCode
            }
            catch(err) {
                state.editorValue = defaultEditorValue
            }
            state.consoleValue = initialState.consoleValue
        },

        RESET_EDITOR_VALUE: (state) => {
            try {
                state.editorValue = state.templateCode[state.editorLang].starterCode
            }
            catch(err) {
                state.editorValue = defaultEditorValue
            }
        },

        UPDATE_CODE_TEMPLATES: (state, action) => {
            state.templateCode = action.payload
            try {
                state.editorValue = state.templateCode[state.editorLang].starterCode
            }
            catch(err) {
                state.editorValue = defaultEditorValue
            }
        }
    }
});

// Export the Actions & Reducers
export const { UPDATE_EDITOR_VALUE, UPDATE_CONSOLE_VALUE, UPDATE_EDITOR_LANG, RESET_EDITOR_VALUE, UPDATE_CODE_TEMPLATES } = codeSlice.actions;
export default codeSlice.reducer