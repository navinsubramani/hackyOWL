import { create } from '@mui/material/styles/createTransitions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    boardState: ["", "", "", "", "", "", "", "", ""],
    p1: "bot",
    p2: "program",
    message: ""
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
        },

        UPDATE_TICTACTOE_MESSAGE: (state, action) => {
            state.message = action.payload
        }
    }
})

export const { UPDATE_BOT_MOVE, UPDATE_PROGRAM_MOVE, UPDATE_TICTACTOE_BOARD_STATE, RESET_TICTACTOE_BOARD_STATE, UPDATE_TICTACTOE_MESSAGE } = tictactoeSlice.actions
export default tictactoeSlice.reducer