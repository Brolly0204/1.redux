import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@/redux';

export default function (mapStateToProps, mapDispatchToProps) {
  return function (WrapedComponent) {
    class ProxyComponent extends Component {
      static contextTypes = {
        store: PropTypes.object.isRequired
      };

      constructor(props, context) {
        super(props, context);
        this.store = context.store;
        this.state = mapStateToProps(this.store.getState());
      }

      componentWillMount() {
        this.unsubscribe = this.store.subscribe(() => {
          this.setState(mapStateToProps(this.store.getState()));
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        let actions = {};
        if (typeof mapDispatchToProps === 'function') {
          actions = mapDispatchToProps(this.store.dispatch)
        } else if(typeof mapDispatchToProps === 'object') {
          actions = bindActionCreators(mapDispatchToProps, this.store.dispatch);
        }
        return <WrapedComponent {...actions} {...this.state} />
      }
    }
    return ProxyComponent;
  }
}