import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Get the initial State from the localStorage
    editorValue: localStorage.getItem('editorValue') || '',
    editorState: localStorage.getItem('editorState')  || '',
    consoleValue: "",
    editorLang: "javascript"
}

export const codeSlice = createSlice({
    name: "code-edit-run",
    initialState,
    reducers: {
        UPDATE_EDITOR_VALUE: (state, action) => {
            state.editorValue = action.payload.value
            state.editorState = action.payload.viewUpdateState

            // Store the editor Value to the local Storage
            localStorage.setItem('editorValue', action.payload.value)
            localStorage.setItem('editorState', action.payload.viewUpdateState)
            console.log(action)
        },

        UPDATE_CONSOLE_VALUE: (state, action) => {
            state.consoleValue = action.payload
            console.log(action)
        },

        UPDATE_EDITOR_LANG: (state, action) => {
            state.editorLang = action.payload
        }

    }
});

// Export the Actions & Reducers
export const { UPDATE_EDITOR_VALUE, UPDATE_CONSOLE_VALUE, UPDATE_EDITOR_LANG } = codeSlice.actions;
export default codeSlice.reducer