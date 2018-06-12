import React, { Component } from 'react';
import store from '../store';
import * as types from '../store/action-types';

function dispatch(type) {
  store.dispatch({type});
}

export default class Counter2 extends Component {
  constructor() {
    super();
    this.state = { number: store.getState().counter2.number };
  }

  componentDidMount() {
    this.unsubscibe = store.subscribe(() => {
      this.setState({ number: store.getState().counter2.number });
    });
  }

  componentWillUnmount() {
    this.unsubscibe();
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => dispatch(types.ADD)}>+</button><br/>
        <button onClick={() => dispatch(types.MINUS)}>-</button>
      </div>
    )
  }
}
