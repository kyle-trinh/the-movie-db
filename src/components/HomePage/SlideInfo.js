import React from 'react';
import { findGenreById } from '../../utils/utilities';

function SlideInfo({ movie }) {
  return (
    <div className="movie__info">
      <h3 className="movie__info__genre">
        {movie.genre_ids.map(id => findGenreById(id, 'movie')).join(' - ')}
      </h3>
    </div>
  );
}

export default SlideInfo;
