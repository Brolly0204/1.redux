// import { createStore } from '@/redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// next 就是
let logger = ({dispatch, getState}) => next => action => {
  console.log('旧状态', getState());
  next(action);
  console.log('新状态', getState());
};

let store = createStore(reducer, applyMiddleware(logger));

// let dispatch = store.dispatch;
// store.dispatch = function (action) {
//   console.log('旧状态', store.getState());
//   dispatch(action);
//   console.log('新状态', store.getState());
// };



window.store = store;
export default store;