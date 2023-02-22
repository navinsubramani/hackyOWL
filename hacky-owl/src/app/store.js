import { configureStore } from '@reduxjs/toolkit';
import codeReducer from '../features/code-edit-run/codeSlice';
import tictactoeReducer from '../challenges/tic-tac-toe/tictactoeSlice'

export const store = configureStore({
  reducer: {
    code: codeReducer,
    tictactoe: tictactoeReducer,
  },
});
