import React from 'react';
import { connect } from 'react-redux';
import { getPopularMovies } from '../../actions/movie';
import MovieCarousel from '../Carousels/MovieCarousel';

class CarouselContainer extends React.Component {
  componentDidMount() {
    this.props.getPopularMovies();
  }

  render() {
    return (
      <section className="movie__list">
        <div className="movie__list__carousel__container">
          <h2 className="movie__list__carousel__container__header">
            Popular Movies
          </h2>
          {this.props.loading ? null : (
            <MovieCarousel movies={this.props.movies} />
          )}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.movies.GET_POPULAR_MOVIES,
    loading: state.movie.loading.GET_POPULAR_MOVIES
  };
}

export default connect(mapStateToProps, { getPopularMovies })(
  CarouselContainer
);
