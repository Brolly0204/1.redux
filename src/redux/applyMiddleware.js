import {compose} from "@/redux";

export default (...middlewares) => createStore => (reducer, preloadState, enhancer) => {
  let store = createStore(reducer, preloadState, enhancer);
  let dispatch = store.dispatch;
  let chain = [];
  let middlewareAPI = {
    getState: store.getState,
    dispatch: action => dispatch(action)
  };
  chain = middlewares.map(middleware => middleware(middlewareAPI));
  dispatch = compose(...chain)(store.dispatch);
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