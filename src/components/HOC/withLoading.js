import React from 'react';
import { Spinner } from '../Layout';

function withLoading(Component) {
  return class extends React.Component {
    render() {
      if (this.props.isLoading) {
        console.log('loading...');
        return <Spinner />;
      } else {
        console.log('not loading...');
        return <Component {...this.props} />;
      }
    }
  };
}

export default withLoading;
