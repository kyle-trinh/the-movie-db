import React from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router-dom';
import MovieInfo from './MovieInfo';

class MovieCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    new Swiper(this.myRef.current, {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      // breakpoints: {
      //   1145: {
      //     slidesPerView: 3
      //   },
      //   699: {
      //     slidesPerView: 2
      //   }
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  render() {
    console.log(this.props.mediaType);
    return (
      <div className="swiper-container" ref={this.myRef}>
        <div className="swiper-wrapper">
          {this.props.movies.map(movie => (
            <Link
              to={`/movie/details/${movie.id}`}
              key={movie.id}
              className="swiper-slide"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`
              }}
            >
              <MovieInfo mediaType={this.props.mediaType} movie={movie} />
            </Link>
          ))}
        </div>

        <div className="swiper-pagination" />
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    );
  }
}

export default MovieCarousel;
