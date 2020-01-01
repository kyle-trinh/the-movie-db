import React from 'react';
import MovieItem from './MovieItem';
import PageBtn from './PageBtn';
import PropTypes from 'prop-types';

function MovieList({ movies, currentPg, currentGenre, mediaType }) {
  return (
    <section className="section__movie__list">
      <div className="container">
        <div className="section__movie__list-grid">
          {movies.results.map(function mapMovie(movie) {
            return (
              <MovieItem movie={movie} mediaType={mediaType} key={movie.id} />
            );
          })}
        </div>

        <PageBtn
          currentPg={currentPg}
          currentGenre={currentGenre}
          mediaType={mediaType}
        />
      </div>
    </section>
  );
}

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
  currentPg: PropTypes.number.isRequired,
  currentGenre: PropTypes.string.isRequired,
  mediaType: PropTypes.string.isRequired
};

export default MovieList;
