import React from 'react';
import { getTrendingMovies } from '../../actions/movie';
import { GET_TRENDING_MOVIES, MOVIE } from '../../constants';
import HeaderSlide from './HeaderSlide';
import { Spinner } from '../Layout';
import withMovieFetching from '../HOC/withMovieFetching';

function Header({ movies }) {
  return (
    <header id="header-home">
      <HeaderSlide movies={movies} />
    </header>
  );
}

Header.displayName = 'Landing Page Header';

export default withMovieFetching(
  Header,
  getTrendingMovies,
  GET_TRENDING_MOVIES,
  MOVIE,
  Spinner
);
