import { configureStore } from '@reduxjs/toolkit';
import codeReducer from '../features/code-edit-run/codeSlice';
import tictactoeReducer from '../challenges/tic-tac-toe/tictactoeSlice'
import navbarReducer from '../features/nav-bar/NavBarslice'
import array1DReducer from '../challenges/array-1d-operation/Array_1D_Slice'
import logicalOpReducer from '../challenges/logical-operation/Logical_Op_Slice'

export const store = configureStore({
  reducer: {
    code: codeReducer,
    navbar: navbarReducer,

    tictactoe: tictactoeReducer,
    
    array1D: array1DReducer,
    logicalOp: logicalOpReducer
  },
});
