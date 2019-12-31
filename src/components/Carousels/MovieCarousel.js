import React from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import Carousel from './Carousel';
import PropTypes from 'prop-types';

function MovieCarousel({ movies, mediaType }) {
  return (
    <Carousel slidesPerView="5">
      {movies.map(movie => (
        <Link
          to={`/${mediaType}/details/${movie.id}`}
          key={movie.id}
          className="swiper-slide"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`
          }}
        >
          <MovieInfo mediaType={mediaType} movie={movie} />
        </Link>
      ))}
    </Carousel>
  );
}

MovieCarousel.propTypes = {
  movies: PropTypes.array.isRequired,
  mediaType: PropTypes.string.isRequired
};

export default MovieCarousel;
