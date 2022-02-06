import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'app',
  initialState: {
    appLoading: null,
    value: 0,
  },
  reducers: {
    setAppLoading: (state, { payload }) => {
      state.appLoading = payload;
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  setAppLoading,
  increment,
  decrement,
  incrementByAmount,
} = slice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.app.value;

export default slice.reducer;
