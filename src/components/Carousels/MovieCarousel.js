import React from 'react';
import { Link } from 'react-router-dom';
import MovieInfo from './MovieInfo';
import Carousel from './Carousel';

class MovieCarousel extends React.Component {
  render() {
    return (
      <Carousel slidesPerView="5">
        {this.props.movies.map(movie => (
          <Link
            to={`/${this.props.mediaType}/details/${movie.id}`}
            key={movie.id}
            className="swiper-slide"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`
            }}
          >
            <MovieInfo mediaType={this.props.mediaType} movie={movie} />
          </Link>
        ))}
      </Carousel>
    );
  }
}

export default MovieCarousel;
