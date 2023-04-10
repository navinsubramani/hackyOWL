import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    displayScreen: ""
}

export const navBarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        UPDATE_DISPLAY_SCREEN: (state, action) => {
            state.displayScreen = action.payload
        }
    }
})

export const { UPDATE_DISPLAY_SCREEN } = navBarSlice.actions
export default navBarSlice.reducer