import { createSlice } from '@reduxjs/toolkit';
import { setAppLoading } from './app';

/*
{
  id: number;
  name: string;
  description: string;
  stack: string;
  path: string;
  url: string;
  github: string;
  feSource?: string;
  beSource?: string;
  demo: string;
  contrib: string;
  isCurrent?: boolean,
}
*/

const projectListData = [
  {
    id: 1,
    name: 'Ocean2you',
    description: '반응형사이트 제작, Full Video Bg',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_1.jpg',
    url: 'http://ocean2you.co.kr/',
    github: '',
    demo: '',
    contrib: 'FE100%',
  },
  // {
  //   id: 2,
  //   name: 'Nurihelp',
  //   description: '반응형사이트 제작',
  //   stack: 'Html5, Css3, Javascript',
  //   path: '/img/portfolio/port_2.jpg',
  //   url: '',
  //   github: '',
  //   demo: 'http://toxnsldxn.cafe24.com/help/views/main/index.html',
  //   contrib: 'FE95%',
  // },
  {
    id: 3,
    name: 'Nurifunding',
    description: '반응형사이트 제작, 리뉴얼 진행중',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_3.jpg',
    url: 'https://www.nurifunding.co.kr/',
    github: '',
    demo: 'http://toxnsldxn.cafe24.com/nurifunding/views/index_v2.0.0.html',
    contrib: 'FE100%',
  },
  {
    id: 4,
    name: 'Goco',
    description: '메인, 리스트 페이지 리뉴얼',
    stack: 'Html5, Css3, Javascript',
    path: '/img/portfolio/port_4.jpg',
    url: 'http://go.co.kr/',
    github: '',
    demo: 'http://toxnsldxn.cafe24.com/goco_renewal/views/main/',
    contrib: 'FE100%',
  },
  // {
  //   id: 5,
  //   name: 'Gocomanage',
  //   description: '관리자페이지 제작',
  //   stack: 'Html5, Scss, Javascript',
  //   path: '/img/portfolio/port_5.jpg',
  //   url: 'https://manage.go.co.kr/_new/views/member/login.php',
  //   github: '',
  //   demo:
  //     'http://toxnsldxn.cafe24.com/goco_manage/views/reservation/reservationFit.html',
  //   contrib: 'FE95%',
  // },
  {
    id: 6,
    name: 'Sunblockterminal',
    description: '반응형사이트 제작',
    stack: 'Html5, Scss, Javascript',
    path: '/img/portfolio/port_8.jpg',
    url: 'http://sunblockterminal.com/main/main.asp',
    github: '',
    demo: '',
    contrib: 'FE100%',
  },
  {
    id: 7,
    name: 'Lanbizberry',
    description: '반응형사이트 제작',
    stack: 'Html5, Scss, Javascript',
    path: '/img/portfolio/port_9.jpg',
    url: 'http://bizberry.co.kr/',
    github: '',
    demo: '',
    contrib: 'FE100%',
  },
  {
    id: 8,
    name: 'Vue-todo',
    description: 'Vue, Vuex, LocalStroage를 이용한 간단 todo앱',
    stack: 'Javascript, Vue, Vuex, Netlify',
    path: '/img/portfolio/port_7.jpg',
    url: 'https://jolly-darwin-1fb40c.netlify.app/',
    github: 'https://github.com/vxggangxv/my-todo',
    demo: '',
    contrib: 'FE100%',
  },
  {
    id: 9,
    name: 'Fron-end-maker',
    description: 'Vue, Vuex, Firebase를 이용한 간단 블로그 제작',
    stack: 'Javascript, Vue, Vuex, Vuetify, Firebase',
    path: '/img/portfolio/port_6.jpg',
    url: 'https://front-end-maker.firebaseapp.com',
    github: 'https://github.com/vxggangxv/Front-End-Maker',
    demo: '',
    contrib: 'FE100% BE100%',
  },
  {
    id: 10,
    name: 'Conacoin',
    description: '반응형사이트 제작',
    stack: 'Html5, Scss, Node.js, Express, Sequelize',
    path: '/img/portfolio/port_10.jpg',
    // url: 'http://conacoin.io/home',
    url: '',
    github: 'https://github.com/vxggangxv/conacoin',
    demo: '',
    contrib: 'FE100% BE100%',
  },
  {
    id: 11,
    name: 'Front Testing',
    description: '로그인 @testing-library, cypress',
    stack: 'react, @testing/library, cypress, apollographql, prisma',
    path: '/img/portfolio/port_11.jpg',
    url: '',
    feSource: 'https://github.com/vxggangxv/junstagram-web',
    beSource: 'https://github.com/vxggangxv/junstagram-server',
    demo: '',
    contrib: 'FE100% BE100%',
    isCurrent: true,
  },
  {
    id: 12,
    name: 'Motion App',
    description: 'react-native 앱 개발',
    stack: 'react-native, react-navigation, recoil',
    path: '/img/portfolio/port_12.jpg',
    url: 'https://play.google.com/store/apps/details?id=com.dofmotion',
    github: 'https://github.com/vxggangxv/motion-app',
    demo: '',
    contrib: 'FE100%',
    isCurrent: true,
  },
  {
    id: 13,
    name: 'DofBridge',
    description: '덴탈 플랫폼(치과와 기공사간)',
    stack: 'react, react-redux, redux-toolkit, styled-component',
    path: '/img/portfolio/port_13.jpg',
    url: 'https://www.dofbridge.com/',
    github: 'https://github.com/vxggangxv/bridge-web',
    demo: '',
    contrib: 'FE80%',
    isCurrent: true,
  },
  {
    id: 14,
    name: 'DofSync',
    description: '기공소 실시간 모니터링(스마트팩토리)',
    stack: 'react, react-redux, redux-toolkit, styled-component, typescript',
    path: '/img/portfolio/port_14.jpg',
    url: '',
    github: 'https://github.com/vxggangxv/sync-web',
    demo: '',
    contrib: 'FE100%',
    isCurrent: true,
  },
];

export const slice = createSlice({
  name: 'project',
  initialState: {
    searchList: projectListData,
    projectList: [],
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setProjectList: (state, action) => {
      // state.projectList = action.payload;
      const setArray = Array.from(action.payload);
      setArray.sort(function (a, b) {
        return b.id < a.id ? -1 : b.id > a.id ? 1 : 0;
      });
      state.projectList = setArray;
    },
    searchByStack: (state, action) => {
      let word = action.payload.toLowerCase();
      var splitWordList = word.split(' ');
      let searchList = [];
      // console.log(state.searchList[0].stack);
      splitWordList.forEach((word) => {
        // console.log(word);
        // console.log(i);
        state.searchList.forEach((item, i) => {
          // console.log(word);
          // console.log(item.stack);
          // console.log(item.stack.indexOf(word));
          if (item.stack.toLowerCase().indexOf(word) > -1) {
            // console.log(item);
            searchList.push(item);
          }
        });
      });
      const set = Array.from(new Set(searchList));
      // console.log(set);
      set.sort(function (a, b) {
        return b.id - a.id;
        // return b.id < a.id ? -1 : b.id > a.id ? 1 : 0;
      });

      console.log('set', set);
      state.projectList = set;

      // state.searchList = state.projectList.filter(str => {
      //   return item.stack.indexOf(str) !== -1;
      // })
    },
  },
});

export const { setProjectList, searchByStack } = slice.actions;

// export const getProjectList = () => async (dispatch) => {
//   dispatch(setProjectList(projectListData));
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('data'), 500);
//   });
// };

export const getProjectList = () => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    // 개별로딩을 하려면, 컴포넌트안에서 설정
    // TODO: set app loading
    // request api
    // test
    // const result = await new Promise((resolve) => {
    //   setTimeout(() => resolve('success'), 5000);
    // });
    // dispatch(actionName(result));
    dispatch(setProjectList(projectListData));
    return { data: 'data', error: null };
  } catch (error) {
    return { data: null, error: error };
  } finally {
    dispatch(setAppLoading(false));
  }
};

// const userSlice = createSlice({
//   name: ...,
//   initialState: ...,
//   reducers: {
//       // Some simple (sync) actions
//       fetchUserStart: (state) => { ... },
//       fetchUserFinish: (state, { payload: user }) => { .... },
//       fetchUserError: (state) => { .... },
//   }
// })
// const { fetchUserStart, fetchUserFinish, fetchUserError} = userSlice.actions

// // Thunk async action
// export const fetchUser = (userId) => async (dispatch, getState) => {
//   try {
//       dispatch(fetchUserStart())
//       const user = await $.getJSON('/api/user/' + userId)
//       dispatch(fetchUserFinish(user))
//   } catch (e) {
//       alert('Error: ' + e)
//       dispatch(fetchUserError())
//   }
// }

export default slice.reducer;
