import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import { getMovieByGenre } from '../../actions/multi';
import { connect } from 'react-redux';
import { GET_MOVIES_BY_GENRE } from '../../constants';
import { findIdByGenre } from '../../utils/utilities';
import { Spinner } from '../Layout';
import store from '../../store';
import { GET_GENRE_SET_LOADING } from '../../constants';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { pageNum, genre, mediaType } = this.props.match.params;

    this.props.getMovieByGenre(
      findIdByGenre(genre, mediaType),
      pageNum,
      mediaType
    );
  }

  componentDidUpdate(prevProps) {
    const { pageNum, mediaType, genre } = this.props.match.params;

    if (
      genre !== prevProps.match.params.genre ||
      pageNum !== prevProps.match.params.pageNum ||
      mediaType !== prevProps.match.params.mediaType
    ) {
      store.dispatch({
        type: GET_GENRE_SET_LOADING
      });
      this.props.getMovieByGenre(
        findIdByGenre(genre, mediaType),
        pageNum,
        mediaType
      );
    }
  }

  render() {
    const { pageNum, mediaType, genre } = this.props.match.params;
    return (
      <div className="movie__list">
        <Header currentGenre={genre} mediaType={mediaType} />
        {this.props.loading ? (
          <Spinner />
        ) : (
          <MovieList
            movies={this.props.movies}
            currentPg={pageNum}
            currentGenre={genre}
            mediaType={mediaType}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.multi.list[GET_MOVIES_BY_GENRE],
    loading: state.multi.loading[GET_MOVIES_BY_GENRE]
  };
}

export default connect(mapStateToProps, { getMovieByGenre })(Movie);
