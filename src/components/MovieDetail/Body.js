import React from 'react';

function Body({ movies }) {
  return (
    <div className="movie__details__body" style={{ height: '100vh' }}>
      <div className="movie__details__body-poster">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movies.poster_path}`}
          alt=""
        />
        <h4 className="movie__details__body-title">{movies.title}</h4>
      </div>

      <div className="movie__details__body-content">
        <h4 className="movie__details__body-content-title">Overview</h4>
        <p className="text-lead">{movies.overview}</p>
        <p className="text-lead">
          <span className="text-bold text-primary">Produced By: </span>
          {movies.production_companies.map(company => company.name).join(', ')}
        </p>
      </div>

      <div className="movie__details__body-video"></div>
    </div>
  );
}

export default Body;
