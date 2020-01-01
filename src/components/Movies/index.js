import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import { getMovieByGenre } from '../../actions/multi';
import withMovieListFetching from '../HOC/withMoveListFetching';
import PropTypes from 'prop-types';

function Landing({
  movies,
  match: {
    params: { pageNum, mediaType, genre }
  }
}) {
  return (
    <div className="movie__list">
      <Header currentGenre={genre} mediaType={mediaType} />

      <MovieList
        movies={movies}
        currentPg={parseInt(pageNum)}
        currentGenre={genre}
        mediaType={mediaType}
      />
    </div>
  );
}

Landing.propTypes = {
  movies: PropTypes.object.isRequired
};

export default withMovieListFetching(Landing, getMovieByGenre);
