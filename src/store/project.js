import { createSlice } from '@reduxjs/toolkit';

const projectListData = [
  {
    id: 1,
    name: 'Ocean2you',
    description: '오션투유 반응형 사이트 제작, Full Video Bg',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_1.jpg',
    url: 'http://ocean2you.co.kr/',
    demo: 'http://ocean2you.co.kr/',
  },
  {
    id: 2,
    name: 'Nurihelp',
    description: '누리헬프 반응형 사이트 제작',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_2.jpg',
    url: '',
    demo: '',
  },
  {
    id: 3,
    name: 'Nurifunding',
    description: '',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_3.jpg',
    url: '',
    demo: '',
  },
  {
    id: 4,
    name: 'Goco',
    description: '',
    stack: 'Html5, Css3, Scss, Javascript',
    path: '/img/portfolio/port_4.jpg',
    url: '',
    demo: '',
  },
  {
    id: 5,
    name: 'Gocomanage',
    description: '',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_5.jpg',
    url: '',
    demo: '',
  },
  {
    id: 6,
    name: 'Vue-todo',
    description: '',
    stack: 'Html5, Css3, Javascript, Vue',
    path: '/img/portfolio/port_6.jpg',
    url: '',
    demo: '',
  },
  {
    id: 7,
    name: 'Sunblockterminal',
    description: '',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_7.jpg',
    url: '',
    demo: '',
  },
  {
    id: 8,
    name: 'Lanbizberry',
    description: '',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_8.jpg',
    url: '',
    demo: '',
  },
  {
    id: 9,
    name: 'Conacoin',
    description: '',
    stack: 'Html5, Css3, Javascript, Node.js, Express',
    path: '/img/portfolio/port_9.jpg',
    url: '',
    demo: '',
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
        // return a.id - b.id;
        return b.id < a.id ? -1 : b.id > a.id ? 1 : 0;
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
    return b.id < a.id ? -1 : b.id > a.id ? 1 : 0;
  });
  return setArray;
  // return state.project.projectList;
};
export const selectSearchList = (state) => state.project.searchList;

export default slice.reducer;
