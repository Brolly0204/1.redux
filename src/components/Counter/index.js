import React, {Component} from 'react';
// import { connect } from '@/react-redux';
import { connect } from 'react-redux';
import actions from '@/store/actions';

class Counter extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.number}</h3>
        <button onClick={() => this.props.increment()}>+</button>
      </div>
    )
  }
}

export default connect(
  state => ({...state}),
  actions
)(Counter)