function createStore(reducer, preloadState) {
  let state = preloadState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  }

  function subscribe(listener) {
    if (typeof listener === 'function') {
      listeners.push(listener);
      return function() {
        listeners = listeners.filter(item => item !== listener);
      }
    } else {
      console.error('listener is not function');
    }
  }

  dispatch({type: '@redux/init'});
  return {
    dispatch,
    subscribe,
    getState
  }
}

export default createStore;
