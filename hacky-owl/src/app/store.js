import { configureStore } from '@reduxjs/toolkit';
import codeReducer from '../features/code-edit-run/codeSlice';

export const store = configureStore({
  reducer: {
    code: codeReducer,
  },
});
