import React from 'react';
import { Link } from 'react-router-dom';
import { findGenreById, shortenOverview } from '../../utils/utilities';

function SlideInfo({ movie }) {
  return (
    <div className="movie__info">
      <h3 className="movie__info__genre">
        {movie.genre_ids.map(id => findGenreById(id, 'movie')).join(' - ')}
      </h3>
      <h1 className="movie__info__title">{movie.title || 'Unavailable'}</h1>
      <h3 className="movie__info__showtime mb-3">{movie.release_date}</h3>
      <p className="text-lead">{shortenOverview(movie.overview)}</p>
      <div className="movie__info__btn">
        <Link to="/" className="btn-primary mr-2">
          <p>More Info</p>
          <div className="btn-primary-overlay" />
        </Link>
        <Link to="/" className="btn-secondary">
          <p>Add to List</p>
          <div className="btn-secondary-overlay" />
        </Link>
      </div>
    </div>
  );
}

export default SlideInfo;
