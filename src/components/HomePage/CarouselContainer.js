import React from 'react';
import withMovieFetching from '../HOC/withMovieFetching';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies
} from '../../actions/movie';
import MovieCarousel from '../Carousels/MovieCarousel';
import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_NOW_PLAYING_MOVIES
} from '../../constants';

class CarouselContainer extends React.Component {
  render() {
    return (
      <section className="movie__list">
        <div className="movie__list__carousel__container">
          <h2 className="movie__list__carousel__container__header">
            {this.props.header}
          </h2>

          <MovieCarousel movies={this.props.movies} />
        </div>
      </section>
    );
  }
}

const GetPopular = withMovieFetching(
  CarouselContainer,
  getPopularMovies,
  GET_POPULAR_MOVIES
);
const GetTopRated = withMovieFetching(
  CarouselContainer,
  getTopRatedMovies,
  GET_TOP_RATED_MOVIES
);
const GetNowPlaying = withMovieFetching(
  CarouselContainer,
  getNowPlayingMovies,
  GET_NOW_PLAYING_MOVIES
);

export { GetPopular, GetNowPlaying, GetTopRated };
