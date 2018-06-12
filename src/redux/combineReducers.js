export default (reducers) => (state = {}, action) => Object.keys(reducers).reduce((currentState, key) => {
  currentState[key] = reducers[key](state[key], action)
  return currentState;
}, {});


// combineReducers({
//   counter: counterReducer,
//   counter2: counterReducer2
// });

// createStore(reducer);

function combineReducers(reducers) {
  return function (state = {}, action) { // 合并成一个reducer
    let newState = {};
    for (let attr in reducers) { // 每一个reducer计算出新状态
      let reducer = reducers[attr];
      newState[attr] = reducer(state[attr], action);
    }
    return newState;
  }
}
