import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import appReducer from './app';
import projectReducer from './project';

export default configureStore({
  reducer: {
    counter: counterReducer,
    app: appReducer,
    project: projectReducer,
  },
});
