import React from 'react';
import { connect } from 'react-redux';
import { getTrending } from '../../actions/movie';

class Landing extends React.Component {
  componentDidMount() {
    this.props.getTrending();
  }
  render() {
    return <div>Landing</div>;
  }
}

export default connect(null, { getTrending })(Landing);
