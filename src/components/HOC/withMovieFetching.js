import React from 'react';
import { connect } from 'react-redux';
import { TVSHOW, MOVIE, GET_DETAIL_MOVIES } from '../../constants';
import store from '../../store';
import { GET_DETAIL_SET_LOADING } from '../../constants';
// import SpinnerSm from '../Layout/SpinnerSm';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

function withMovieFetching(
  Component,
  fetchMovie,
  movieType,
  mediaType = MOVIE,
  Spinner
) {
  class HOComponent extends React.Component {
    componentDidMount() {
      if (this.props.match && this.props.match.params.id) {
        store.dispatch({
          type: GET_DETAIL_SET_LOADING
        });
        this.props.fetchMovie(
          this.props.match.params.id,
          this.props.match.params.mediaType
        );
      } else {
        this.props.fetchMovie();
      }
    }

    render() {
      HOComponent.displayName = `HOComponent(${getDisplayName(Component)})`;
      return this.props.loading ? (
        <Spinner />
      ) : (
        <Component mediaType={mediaType} {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    if (mediaType === MOVIE || movieType === GET_DETAIL_MOVIES) {
      return {
        movies: state.movie.movies[movieType],
        loading: state.movie.loading[movieType]
      };
    } else if (mediaType === TVSHOW) {
      return {
        movies: state.tv.tvShows[movieType],
        loading: state.tv.loading[movieType]
      };
    }
  }

  return connect(mapStateToProps, { fetchMovie })(HOComponent);
}

export default withMovieFetching;
