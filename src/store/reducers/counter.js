import * as types from '../action-types';

let initState = { number: 0 };
export default function (state = initState, action) {
  console.log('counter1', action);
  switch(action.type) {
    case types.INCREMENT:
      return { ...state, number: state.number + 1 };
    case types.DECREMENT:
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
