import React, { Component } from 'react';
import store from '../store';
import * as types from '../store/action-types';

function dispatch(type) {
  store.dispatch({type});
}

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { number: store.getState().counter.number };
  }

  componentDidMount() {
    this.unsubscibe = store.subscribe(() => {
      this.setState({ number: store.getState().counter.number });
    });
  }

  componentWillUnmount() {
    this.unsubscibe();
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => dispatch(types.INCREMENT)}>+</button><br/>
        <button onClick={() => dispatch(types.DECREMENT)}>-</button>
      </div>
    )
  }
}
