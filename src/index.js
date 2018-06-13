import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import store from '@/store';
import { Provider } from '@/react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Counter/>
      <br/>
      <Todos/>
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);
