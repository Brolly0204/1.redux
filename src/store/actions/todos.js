import * as types from '@/store/action-types';

export default {
  addTodo(text) {
    return {
      type: types.ADD_TODO,
      text
    }
  },
  delTodo(id) {
    return {
      type: types.DEL_TODO,
      id
    }
  },
  toggleTodo(id) {
    return {
      type: types.TOGGLE_TODO,
      id
    }
  },
  switchType(newType) {
    return {
      type: types.SWITCH_TYPE,
      newType
    }
  }
}