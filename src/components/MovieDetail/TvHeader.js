import React from 'react';

function TvHeader({ movies }) {
  return (
    <header id="header__movie-detail">
      <div
        className="header__movie__bg-blur"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`
        }}
      />
      <div
        className="header__movie__bg-main"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`
        }}
      >
        <div className="header__movie__info">
          <img
            className="header__movie__info-poster"
            src={`https://image.tmdb.org/t/p/w1280${movies.poster_path}`}
            alt={movies.title}
          />

          <div className="header__movie__info-detail">
            <div className="header__movie__info-detail-tagline">
              {`Last Air Date: ${movies.last_air_date}`}
            </div>

            <h1 className="header__movie__info-detail-title">{movies.title}</h1>

            <p className="header__movie__info-detail-genre">
              {`${movies.number_of_seasons} seasons | ` +
                movies.genres.map(genre => genre.name).join(' - ')}
            </p>

            <button
              className="btn-primary"
              onClick={() => window.scrollTo(0, 885)}
            >
              <div className="btn-primary-overlay"></div>
              <p>Read More</p>
            </button>
          </div>
        </div>
      </div>

      <div className="header__movie__bottom">
        <div className="header__movie__bottom-stats">
          <div className="header__movie__bottom-stats-item">
            <h4 className="header__movie__bottom-stats-item-title">Rating</h4>
            <p className="header__movie__bottom-stats-item-subtext">
              {movies.vote_average}/10
            </p>
          </div>
          <div className="header__movie__bottom-stats-item">
            <h4 className="header__movie__bottom-stats-item-title">Status</h4>
            <p className="header__movie__bottom-stats-item-subtext">
              {movies.status}
            </p>
          </div>
          <div className="header__movie__bottom-stats-item">
            <h4 className="header__movie__bottom-stats-item-title">
              Total Episodes
            </h4>
            <p className="header__movie__bottom-stats-item-subtext">
              {movies.number_of_episodes}
            </p>
          </div>
        </div>

        <ul className="header__movie__bottom-menu">
          <li>
            <button>Full Cast and Crew</button>
          </li>
          <li>
            <button>Trailer</button>
          </li>
          <li>
            <button>Overview</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default TvHeader;
