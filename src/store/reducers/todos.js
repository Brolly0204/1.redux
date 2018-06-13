import * as types from '@/store/action-types';

let initState = {
  items: [],
  newType: 'all'
};

export default function (state= initState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        newType: 'all',
        items: [
          ...state.items,
          {text: action.text, completed: false, id: Date.now()}
        ]
      };
    case types.DEL_TODO:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id)
      };
    case types.TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            item.completed = !item.completed;
          }
          return item;
        })
      };
    case types.SWITCH_TYPE:
      return {
        ...state,
        newType: action.newType
      };
    default:
      return state;
  }
}