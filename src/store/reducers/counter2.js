import * as types from '../action-types';

let initState = { number: 0 };
export default function (state = initState, action) {
  console.log('counter2', action);
  switch(action.type) {
    case types.ADD:
      return { ...state, number: state.number + 1 };
    case types.MINUS:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
