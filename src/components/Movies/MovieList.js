import React from 'react';
import { Link } from 'react-router-dom';
import { findGenreById } from '../../utils/utilities';
import PageBtn from './PageBtn';

function MovieList({ movies, currentPg, currentGenre, mediaType }) {
  return (
    <section className="section__movie__list">
      <div className="container">
        <div className="section__movie__list-grid">
          {movies.results.map(function mapMovie(movie) {
            return (
              <Link
                key={movie.id}
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
                    <p className="text-normal text-bold mr-1">
                      {movie.vote_average}
                    </p>
                    <i className="fas fa-star fa-2x" />
                  </div>
                </div>
              </Link>
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

export default MovieList;
