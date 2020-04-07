import { createSlice } from '@reduxjs/toolkit';

const projectListData = [
  {
    name: 'Conacoin1',
    date: '2020.03.25',
    stack: 'html5, css3, javascript'
  },
  {
    name: 'Conacoin2',
    date: '2020.03.25',
    stack: 'html5, css3, javascript, react'
  },
  {
    name: 'Conacoin3',
    date: '2020.03.25',
    stack: 'html5, css3, javascript, vue'
  },
  {
    name: 'Conacoin4',
    date: '2020.03.25',
    stack: 'html5, css3, javascript, express'
  },
];

export const slice = createSlice({
  name: 'project',
  initialState: {
    projectList: projectListData,
    searchList: projectListData
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    searchByStack: (state, action) => {
      let word = action.payload.toLowerCase();
      var splitWordList = word.split(' ');
      let searchList = [];
      splitWordList.forEach((word) => {
        // console.log(word);
        // console.log(i);
        state.projectList.forEach((item, i) => {
          if (item.stack.indexOf(word) > -1) {
            // console.log(item);
            searchList.push(item);
          }
        });
      })
      // console.log(searchList);
      const set = Array.from(new Set(searchList));
      // console.log(set);
      set.sort(function (a, b) { // 오름차순
        return a - b;
      });
      state.searchList = set;

      // state.searchList = state.projectList.filter(str => {
      //   return item.stack.indexOf(str) !== -1;
      // })
    },
  },
});

export const { searchByStack } = slice.actions;

export const selectProjectList = state => state.project.projectList;
export const selectSearchList = state => state.project.searchList;

export default slice.reducer;
