import {compose} from "redux/index";

export default (...middlewares) => createStore => reducer => {
  let store = createStore(reducer);
  let dispatch = store.dispatch;
  let middlewareAPI = {
    getState: store.getState,
    dispatch: action => dispatch(action)
  };
  middlewares = middlewares.map(middleware => middleware(middlewareAPI));
  dispatch = compose(...middlewares)(store.dispatch);
  return {
    ...store,
    dispatch
  }
}

// function applyMiddleware(...middlewares) {
//   return function (createStore) {
//     return function (reducer) {
//       let store = createStore(reducer);
//       let dispatch;
//       let middlewareAPI = {
//         getState: store.getState,
//         dispatch: action => dispatch(action)
//       };
//       middlewares = middlewares.map(middleware => middleware(middlewareAPI));
//       dispatch = compose(...middlewares)(store.dispatch);
//       return {...store, dispatch};
//     }
//   }
// }