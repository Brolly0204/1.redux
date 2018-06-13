import * as types from '@/store/action-types';

export default function (state = {number: 0}, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {...state, number: state.number + 1};
    case types.DECREMENT:
      return {...state, number: state.number - 1};
    default:
      return state;
  }
}