import React from 'react';
import { shortenTitle, findGenreById } from '../../utils/utilities';

function MovieInfo({ movie, mediaType }) {
  console.log(mediaType);
  return (
    <>
      <div className="carousel__movie-overlay" />
      <div className="carousel__movie-info">
        <h3 className="carousel__movie-info-title">
          {movie.name ? shortenTitle(movie.name) : shortenTitle(movie.title)}
        </h3>
        <p className="carousel__movie-info-genre">
          {movie.genre_ids
            .map(function matchId(id) {
              return findGenreById(id, mediaType);
            })
            .join(', ')}
        </p>
        <div className="carousel__movie-info-vote">
          <p>{movie.vote_average ? movie.vote_average : '??'}</p>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
