import * as types from './action-types';

export default {
  increment(payload = 1) {
    return {
      type: types.INCREMENT,
      payload
    }
  }
}