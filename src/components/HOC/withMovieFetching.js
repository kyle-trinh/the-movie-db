import React from 'react';
import { connect } from 'react-redux';
import { TVSHOW, MOVIE } from '../../constants';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

function withMovieFetching(
  Component,
  fetchMovie,
  movieType,
  mediaType = MOVIE
) {
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
    if (mediaType === MOVIE) {
      return {
        movies: state.movie.movies[movieType],
        loading: state.movie.loading[movieType]
      };
    } else {
      return {
        movies: state.tv.tvShows[movieType],
        loading: state.tv.loading[movieType]
      };
    }
  }

  return connect(mapStateToProps, { fetchMovie })(HOComponent);
}

export default withMovieFetching;
