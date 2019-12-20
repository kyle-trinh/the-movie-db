import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import { getMovieByGenre } from '../../actions/movie';
import { connect } from 'react-redux';
import { GET_MOVIES_BY_GENRE, MOVIE, TVSHOW } from '../../constants';
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
    const { pageNum, genre } = this.props.match.params;

    this.props.getMovieByGenre(
      findIdByGenre(genre, this.props.mediaType),
      pageNum,
      this.props.mediaType
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
        findIdByGenre(genre, this.props.mediaType),
        pageNum,
        this.props.mediaType
      );
    }
  }

  render() {
    console.log(this.props.mediaType);
    return (
      <div className="movie__list">
        <Header
          currentGenre={this.props.match.params.genre}
          mediaType={this.props.mediaType}
        />
        {this.props.loading ? (
          <Spinner />
        ) : (
          <MovieList
            movies={this.props.movies}
            currentPg={this.props.match.params.pageNum}
            currentGenre={this.props.match.params.genre}
            mediaType={this.props.mediaType}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.movies[GET_MOVIES_BY_GENRE],
    loading: state.movie.loading[GET_MOVIES_BY_GENRE]
  };
}

export default connect(mapStateToProps, { getMovieByGenre })(Movie);
