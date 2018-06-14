import * as types from './action-types';

export default {
  increment(payload = 1) {
    return {
      type: types.INCREMENT,
      payload
    }
  },
  thunkIncrement() {
    return function (dispatch, getState) {
      setTimeout(() => {
        dispatch({type: types.INCREMENT, payload: 1});
      }, 1000);
    }
  },
  promiseIncrement() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({type: types.INCREMENT, payload: 1});
      }, 1000);
    });
  },
  payloadIncrement() {
    return {
      type: types.INCREMENT,
      payload: new Promise(function (resolve, reject) {
        setTimeout(function () {
          if (Math.random() > 0.5) {
            resolve(5);
          } else {
            reject(-5);
          }
        }, 100)
      })
    }
  }
}