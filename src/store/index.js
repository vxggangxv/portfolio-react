import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import projectReducer from './project';

export default configureStore({
  reducer: {
    counter: counterReducer,
    project: projectReducer
  },
});
