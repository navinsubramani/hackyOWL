import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    challengeID: "",
    gameCompleted: false,

    tabDisplay: "Challenge"
}

// Slice

export const array1DSlice = createSlice({
    name: "array1DOperations",
    initialState,
    reducers: {
        UPDATE_TABDISPLAY: (state, action) => {
            state.tabDisplay = action.payload
        },

        UPDATE_CURRENT_CHALLENGE: (state, action) => {
            state.challengeID = action.payload.challengeID
        },

        UPDATE_GAME_STATUS: (state, action) => {
            state.gameCompleted = action.payload
        },

    }
})

export const { 
    UPDATE_TABDISPLAY,
    UPDATE_CURRENT_CHALLENGE ,
    UPDATE_GAME_STATUS
        } = array1DSlice.actions
export default array1DSlice.reducer