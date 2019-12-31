import React from 'react';
import { connect } from 'react-redux';
import { MOVIE } from '../../constants';
import PropTypes from 'prop-types';

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
      this.props.fetchMovie();
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
    return {
      movies: state[mediaType].list[movieType],
      loading: state[mediaType].loading[movieType]
    };
    // if (mediaType === MOVIE || movieType === GET_DETAIL_MOVIES) {
    //   return {
    //     movies: state.movie.movies[movieType],
    //     loading: state.movie.loading[movieType]
    //   };
    // } else if (mediaType === TVSHOW) {
    //   return {
    //     movies: state.tv.tvShows[movieType],
    //     loading: state.tv.loading[movieType]
    //   };
    // }
  }

  Component.propTypes = {
    movies: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

  return connect(mapStateToProps, { fetchMovie })(HOComponent);
}

export default withMovieFetching;
