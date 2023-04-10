import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    challengeID: "",
    gameCompleted: false,

    tabDisplay: "Challenge"
}

// Slice

export const logicalOpSlice = createSlice({
    name: "logicaloperations",
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
        } = logicalOpSlice.actions
export default logicalOpSlice.reducer