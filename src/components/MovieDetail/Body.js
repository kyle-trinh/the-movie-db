import React from 'react';
import ActorCarousel from '../Carousels/ActorCarousel';
import Review from './Review';

function Body({ movies, cast }) {
  console.log(cast);
  return (
    <div className="movie__details__body">
      <div className="movie__details__body-poster">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movies.poster_path}`}
          alt=""
        />
        <h4 className="movie__details__body-title">{movies.title}</h4>
      </div>

      <div className="movie__details__body-content">
        <h4 className="movie__details__body-content-title mb-1">Overview</h4>
        <p className="text-desc mb-2">{movies.overview}</p>
        <p className="text-desc">
          <span className="text-bold text-primary">Produced By: </span>
          {movies.production_companies.map(company => company.name).join(', ')}
        </p>
        <p className="text-desc">
          <span className="text-bold text-primary">Avalable in: </span>
          {movies.spoken_languages
            ? movies.spoken_languages.map(language => language.name).join(', ')
            : movies.languages.map(language => language.name).join(', ')}
        </p>
        <h4 className="movie__details__body-content-title mt-4">Cast</h4>
        {cast.loading ? null : <ActorCarousel cast={cast.list} />}
        <Review id={movies.id} />
      </div>

      <div className="movie__details__body-video"></div>
    </div>
  );
}

export default Body;
