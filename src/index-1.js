function createStore(reducer, preloadedState) {
  let state = preloadedState;
  let listeners = [];

  function getState() {
    return JSON.parse(JSON.stringify(state));
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
    return action;
  }

  function subscribe(listener) { // 订阅state仓库里的状态
    listeners.push(listener);
    return function() { // 取消订阅
      listeners = listeners.filter(item => item !== listener);
    }
  }

  dispatch({type: '@init'});
  return {
    getState,
    dispatch,
    subscribe,
  }
}

const UPDATE_TITLE_COLOR = 'UPDATE_TITLE_COLOR';
const UPDATE_TITLE_TEXT = 'UPDATE_TITLE_TEXT';
const UPDATE_CONTEXT_COLOR = 'UPDATE_CONTEXT_COLOR';
const UPDATE_CONTEXT_TEXT = 'UPDATE_CONTEXT_TEXT';

let initstate = {
  title: {
    text: 'Hello World!',
    color: 'red'
  },
  context: {
    text: 'Hello ali!',
    color: 'green'
  }
}

let reducer = function(state = initstate, action) {
  switch (action.type) {
    case UPDATE_TITLE_TEXT:
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      };
    case UPDATE_TITLE_COLOR:
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    case UPDATE_CONTEXT_TEXT:
      return {
        ...state,
        context: {
          ...state.context,
          text: action.text
        }
      }
    case UPDATE_CONTEXT_COLOR:
      return {
        ...state,
        context: {
          ...state.context,
          color: action.color
        }
      }
    default:
      return state;
  }
  return state;
}

function renderTitle(state) {
  let element = document.querySelector('#title');
  element.innerHTML = state.text;
  element.style.color = state.color;
}

function renderContext(state) {
  let element = document.querySelector('#content');
  element.innerHTML = state.text;
  element.style.color = state.color;
}

function render() {
  renderTitle(store.getState().title);
  renderContext(store.getState().context);
}


let store = createStore(reducer, {
  title: {
    text: 'Hello wenli!',
    color: 'pink'
  },
  context: {
    text: 'hi world!',
    color: 'green'
  }
});
let unsubscribe = store.subscribe(render);

render();
setTimeout(() => {
  store.dispatch({type: UPDATE_TITLE_TEXT, text: 'Hello liwenli'});
  store.dispatch({type: UPDATE_CONTEXT_COLOR, color: 'blue'});
}, 2000);
