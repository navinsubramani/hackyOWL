import { create } from '@mui/material/styles/createTransitions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    boardState: ["", "", "", "", "", "", "", "", ""],
    p1: "program",
    p2: "bot",
    message: "",
    tabDisplay: "Challenge"
}


// Slice
export const tictactoeSlice = createSlice({
    name: "tictactoe",
    initialState,
    reducers: {
        UPDATE_BOT_MOVE: (state, action) => {

        },

        UPDATE_PROGRAM_MOVE: (state, action) => {

        },

        UPDATE_TICTACTOE_BOARD_STATE: (state, action) => {
            state.boardState = action.payload
        },

        RESET_TICTACTOE_BOARD_STATE: (state) => {
            state.boardState = initialState.boardState
            state.message = ""
        },

        UPDATE_TICTACTOE_MESSAGE: (state, action) => {
            state.message = action.payload
        },

        UPDATE_PLAYER_DETAILS: (state, action) => {
            state.p1 = action.payload.p1
            state.p2 = action.payload.p2
        },

        UPDATE_TABDISPLAY: (state, action) => {
            state.tabDisplay = action.payload
        }
    }
})

export const { 
    UPDATE_BOT_MOVE, 
    UPDATE_PROGRAM_MOVE, 
    UPDATE_TICTACTOE_BOARD_STATE, 
    RESET_TICTACTOE_BOARD_STATE, 
    UPDATE_TICTACTOE_MESSAGE, 
    UPDATE_PLAYER_DETAILS,
    UPDATE_TABDISPLAY 
        } = tictactoeSlice.actions
export default tictactoeSlice.reducer