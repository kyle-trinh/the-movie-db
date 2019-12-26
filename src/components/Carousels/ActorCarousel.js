import React from 'react';
import ActorInfo from './ActorInfo';
import Carousel from './Carousel';

class ActorCarousel extends React.Component {
  render() {
    return (
      <Carousel slidesPerView="3" actor={true}>
        {this.props.cast.map(movie => (
          <div
            to={`/movies/details/${movie.id}`}
            key={movie.id}
            className="swiper-slide"
            style={{
              backgroundImage: `${
                movie.profile_path
                  ? `url(https://image.tmdb.org/t/p/w185${movie.profile_path}`
                  : 'url(https://via.placeholder.com/200)'
              } )`
            }}
          >
            <ActorInfo actor={movie} />
            {/* <MovieInfo mediaType={this.props.mediaType} movie={movie} /> */}
          </div>
        ))}
      </Carousel>
    );
  }
}

export default ActorCarousel;
