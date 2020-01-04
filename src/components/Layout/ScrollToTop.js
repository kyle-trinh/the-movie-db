import React from 'react';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import { TOGGLE_MENU } from '../../constants';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      store.dispatch({
        type: TOGGLE_MENU
      });
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
