import React from 'react';
import { connect } from 'react-redux';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

function withMovieFetching(Component, fetchMovie, movieType) {
  class HOComponent extends React.Component {
    componentDidMount() {
      this.props.fetchMovie();
    }

    render() {
      HOComponent.displayName = `HOComponent(${getDisplayName(Component)})`;
      return this.props.loading ? null : <Component {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      movies: state.movie.movies[movieType],
      loading: state.movie.loading[movieType]
    };
  }

  return connect(mapStateToProps, { fetchMovie })(HOComponent);
}

export default withMovieFetching;
