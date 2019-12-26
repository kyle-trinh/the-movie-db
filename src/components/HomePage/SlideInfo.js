import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { findGenreById, shortenOverview } from '../../utils/utilities';
import InProgress from '../Layout/InProgress';

function SlideInfo({ movie }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="movie__info">
      <h3 className="movie__info__genre">
        {movie.genre_ids.map(id => findGenreById(id)).join(' - ')}
      </h3>
      <h1 className="movie__info__title">{movie.title || 'Unavailable'}</h1>
      <h3 className="movie__info__showtime mb-3">{movie.release_date}</h3>
      <p className="text-lead">{shortenOverview(movie.overview)}</p>
      <div className="movie__info__btn">
        <Link to={`/movie/details/${movie.id}`} className="btn-primary mr-2">
          <p>More Info</p>
          <div className="btn-primary-overlay" />
        </Link>
        <Link
          to="/"
          className="btn-secondary"
          onClick={() => setShowModal(true)}
        >
          <p>Add to List</p>
          <div className="btn-secondary-overlay" />
        </Link>
      </div>

      <InProgress showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default SlideInfo;
