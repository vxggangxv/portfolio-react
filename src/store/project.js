import { createSlice } from '@reduxjs/toolkit';

const projectListData = [
  {
    name: 'Conacoin1',
    date: '2020.03.25',
    stack: 'html5, css3, javascript',
    // url: '/img/portfolio/port_0.jpg',
    url: '/img/portfolio2/9.jpg',
  },
  {
    name: 'Conacoin2',
    date: '2020.03.26',
    stack: 'html5, css3, javascript, react',
    // url: '/img/portfolio/port_1.jpg',
    url: '/img/portfolio2/10.jpg',
  },
  {
    name: 'Conacoin3',
    date: '2020.03.27',
    stack: 'html5, css3, javascript, vue',
    // url: '/img/portfolio/port_2.jpg',
    url: '/img/portfolio2/11.jpg',
  },
  {
    name: 'Conacoin4',
    date: '2020.03.28',
    stack: 'html5, css3, javascript, express',
    // url: '/img/portfolio/port_3.jpg',
    url: '/img/portfolio2/14.jpg',
  },
];

export const slice = createSlice({
  name: 'project',
  initialState: {
    projectList: projectListData,
    searchList: projectListData,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    searchByStack: (state, action) => {
      let word = action.payload.toLowerCase();
      var splitWordList = word.split(' ');
      let searchList = [];
      splitWordList.forEach((word) => {
        // console.log(word);
        // console.log(i);
        state.searchList.forEach((item, i) => {
          if (item.stack.indexOf(word) > -1) {
            // console.log(item);
            searchList.push(item);
          }
        });
      });
      // console.log(searchList);
      const set = Array.from(new Set(searchList));
      // console.log(set);
      set.sort(function (a, b) {
        // return a.date - b.date;
        return b.date < a.date ? -1 : b.date > a.date ? 1 : 0;
      });

      state.projectList = set;

      // state.searchList = state.projectList.filter(str => {
      //   return item.stack.indexOf(str) !== -1;
      // })
    },
  },
});

export const { searchByStack } = slice.actions;

export const selectProjectList = (state) => {
  const setArray = Array.from(state.project.projectList);
  setArray.sort(function (a, b) {
    return b.date < a.date ? -1 : b.date > a.date ? 1 : 0;
  });
  return setArray;
  // return state.project.projectList;
};
export const selectSearchList = (state) => state.project.searchList;

export default slice.reducer;
