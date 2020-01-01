import React from 'react';
import { Link } from 'react-router-dom';
import { findGenreById } from '../../utils/utilities';
import PropTypes from 'prop-types';

function MovieItem({ movie, mediaType }) {
  return (
    <Link
      to={`/${mediaType}/details/${movie.id}`}
      className="section__movie__list-item"
    >
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt=""
        />
      </div>
      <div className="movie__info">
        <h2 className="movie__info-title">
          {movie.title || movie.name || 'Unavalable'}
        </h2>
        <p className="text-normal text-dim mb-1">
          {movie.genre_ids
            .map(function matchId(id) {
              return findGenreById(id, mediaType);
            })
            .join(' - ')}
        </p>
        <div className="movie__info-rating">
          <p className="text-normal text-bold mr-1">{movie.vote_average}</p>
          <i className="fas fa-star fa-2x" />
        </div>
      </div>
    </Link>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  mediaType: PropTypes.string.isRequired
};

export default MovieItem;
