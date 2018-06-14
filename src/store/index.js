import { createStore, applyMiddleware } from '@/redux';
// import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// next 就是
let logger = ({dispatch, getState}) => next => action => {
  console.log('旧状态1', getState());
  next(action);
  console.log('新状态1', getState());
  // let newState = getState();
  // if (newState.number === 5) {
  //   dispatch({type: 'INCREMENT', payload: -5});
  // }
};

// action 是异步函数
let thunk = ({dispatch, getState}) => next => action => {
  if (typeof action === 'function') {
    action(dispatch, getState)
  } else {
    next(action);
  }
};

// action promise
let promise = ({dispatch, getState}) => next => action => {
  if (action.then && typeof action.then === 'function') {
    action.then(dispatch);
  } else if (action.payload && typeof action.payload.then === 'function') {
    action.payload.then(payload => dispatch({...action, payload}), error => dispatch({...action, payload: error, error: true}))
  } else {
    next(action);
  }
};


// redux-thunk 源码
// https://github.com/reduxjs/redux-thunk/blob/master/src/index.js#L4:31

// redux-promise 源码
// https://github.com/redux-utilities/redux-promise/blob/master/src/index.js#L7:46

// import isPromise from 'is-promise';
// import { isFSA } from 'flux-standard-action';

// export default function promiseMiddleware({ dispatch }) {
//   return next => action => {
//     if (!isFSA(action)) {
//       return isPromise(action) ? action.then(dispatch) : next(action);
//     }
//
//     return isPromise(action.payload)
//       ? action.payload
//         .then(result => dispatch({ ...action, payload: result }))
//         .catch(error => {
//           dispatch({ ...action, payload: error, error: true });
//           return Promise.reject(error);
//         })
//       : next(action);
//   };
// }
let store = createStore(reducer, applyMiddleware(promise, thunk, logger));

// let dispatch = store.dispatch;
// store.dispatch = function (action) {
//   console.log('旧状态', store.getState());
//   dispatch(action);
//   console.log('新状态', store.getState());
// };



window.store = store;
export default store;