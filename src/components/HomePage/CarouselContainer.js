import React from 'react';
import withMovieFetching from '../HOC/withMovieFetching';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies
} from '../../actions/movie';
import { getNowPlayingTV, getPopularTV, getTopRatedTV } from '../../actions/tv';
import MovieCarousel from '../Carousels/MovieCarousel';
import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_TV,
  GET_NOW_PLAYING_TV,
  GET_TOP_RATED_TV,
  MOVIE,
  TVSHOW
} from '../../constants';
import SpinnerSm from '../Layout/SpinnerSm';

class CarouselContainer extends React.Component {
  render() {
    return (
      <>
        <h2 className="movie__list__carousel__container__header">
          {this.props.header}
        </h2>

        <MovieCarousel
          movies={this.props.movies}
          mediaType={this.props.mediaType}
        />
      </>
    );
  }
}

const GetPopular = withMovieFetching(
  CarouselContainer,
  getPopularMovies,
  GET_POPULAR_MOVIES,
  MOVIE,
  SpinnerSm
);
const GetTopRated = withMovieFetching(
  CarouselContainer,
  getTopRatedMovies,
  GET_TOP_RATED_MOVIES,
  MOVIE,
  SpinnerSm
);
const GetNowPlaying = withMovieFetching(
  CarouselContainer,
  getNowPlayingMovies,
  GET_NOW_PLAYING_MOVIES,
  MOVIE,
  SpinnerSm
);

const GetPopularTV = withMovieFetching(
  CarouselContainer,
  getPopularTV,
  GET_POPULAR_TV,
  TVSHOW,
  SpinnerSm
);

const GetNowPlayingTV = withMovieFetching(
  CarouselContainer,
  getNowPlayingTV,
  GET_NOW_PLAYING_TV,
  TVSHOW,
  SpinnerSm
);

const GetTopRatedTV = withMovieFetching(
  CarouselContainer,
  getTopRatedTV,
  GET_TOP_RATED_TV,
  TVSHOW,
  SpinnerSm
);

export {
  GetPopular,
  GetNowPlaying,
  GetTopRated,
  GetPopularTV,
  GetNowPlayingTV,
  GetTopRatedTV
};
