import React, {Component} from 'react';
import { connect } from '@/react-redux';
// import { connect } from 'react-redux';
import actions from '@/store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.thunkIncrement()}>thunk +</button>
        <button onClick={() => this.props.promiseIncrement()}>promise +</button>
        <button onClick={() => this.props.payloadIncrement()}>payload +</button>
      </div>
    )
  }
}

export default connect(
  state => ({...state}),
  actions
)(Counter)