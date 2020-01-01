import React from 'react';
import { connect } from 'react-redux';
import { GET_MOVIES_BY_GENRE, GET_GENRE_SET_LOADING } from '../../constants';
import { Spinner } from '../Layout';
import { findIdByGenre } from '../../utils/utilities';
import store from '../../store';

function withMovieListFetching(Component, fetchMovieList) {
  class HOComponent extends React.Component {
    componentDidMount() {
      const { pageNum, genre, mediaType } = this.props.match.params;

      this.props.fetchMovieList(findIdByGenre(genre), pageNum, mediaType);
    }

    componentDidUpdate(prevProps) {
      const { pageNum, genre, mediaType } = this.props.match.params;

      if (
        genre !== prevProps.match.params.genre ||
        pageNum !== prevProps.match.params.pageNum ||
        mediaType !== prevProps.match.params.mediaType
      ) {
        store.dispatch({
          type: GET_GENRE_SET_LOADING
        });
        this.props.fetchMovieList(
          findIdByGenre(genre, mediaType),
          pageNum,
          mediaType
        );
      }
    }

    render() {
      return this.props.loading ? <Spinner /> : <Component {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      movies: state.multi.list[GET_MOVIES_BY_GENRE],
      loading: state.multi.loading[GET_MOVIES_BY_GENRE]
    };
  }

  return connect(mapStateToProps, { fetchMovieList })(HOComponent);
}

export default withMovieListFetching;
