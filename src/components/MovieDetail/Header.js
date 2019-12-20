import React from 'react';

class Header extends React.Component {
  render() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
    const { movies } = this.props;
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
                {movies.tagline || 'No Tagline Avalable'}
              </div>

              <h1 className="header__movie__info-detail-title">
                {movies.title}
              </h1>

              <p className="header__movie__info-detail-genre">
                {(movies.runtime || 'Unavalable') +
                  ' min | ' +
                  movies.genres.map(genre => genre.name).join(' - ')}
              </p>

              <button className="btn-primary">
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
              <h4 className="header__movie__bottom-stats-item-title">Budget</h4>
              <p className="header__movie__bottom-stats-item-subtext">
                {formatter.format(movies.budget)}
              </p>
            </div>
            <div className="header__movie__bottom-stats-item">
              <h4 className="header__movie__bottom-stats-item-title">
                Revenue
              </h4>
              <p className="header__movie__bottom-stats-item-subtext">
                {formatter.format(movies.revenue)}
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
}

export default Header;
