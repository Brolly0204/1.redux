import * as types from '@/store/action-types';

export default {
  increment() {
    return { type: types.INCREMENT }
  },
  decrement() {
    return { type: types.DECREMENT }
  }
}