import { configureStore } from '@reduxjs/toolkit';
import codeReducer from '../features/code-edit-run/codeSlice';
import tictactoeReducer from '../challenges/tic-tac-toe/tictactoeSlice'
import navbarReducer from '../features/nav-bar/NavBarslice'

export const store = configureStore({
  reducer: {
    code: codeReducer,
    tictactoe: tictactoeReducer,
    navbar: navbarReducer,
  },
});
