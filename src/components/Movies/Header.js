import React from 'react';
import GenreSelector from './GenreSelector';
import { MOVIE, TVSHOW } from '../../constants';

function Header({ currentGenre, mediaType }) {
  const headings = {
    [MOVIE]: {
      heading: 'Movie List',
      subtext: 'Browse through great collection of movies'
    },
    [TVSHOW]: {
      heading: 'TV Shows',
      subtext: 'Browse through great collection of TV Shows'
    }
  };

  return (
    <header id="header-movie">
      <div className="container">
        <div className="header__movie-content">
          <h1 className="section-heading">{headings[mediaType].heading}</h1>
          <div className="underline"></div>
          <p className="text-lead mt-1">{headings[mediaType].subtext}</p>

          <GenreSelector currentGenre={currentGenre} mediaType={mediaType} />
        </div>
      </div>
    </header>
  );
}

export default Header;
