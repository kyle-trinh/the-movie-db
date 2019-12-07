import React from 'react';
import { connect } from 'react-redux';
import { getTrendingMovies } from '../../actions/movie';
import HeaderSlide from './HeaderSlide';
import { Spinner } from '../Layout';

class Header extends React.Component {
  componentDidMount() {
    this.props.getTrendingMovies();
  }

  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <header id="header-home">
        <HeaderSlide movies={this.props.trendingMovies} />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    trendingMovies: state.movie.movies.GET_TRENDING_MOVIES,
    loading: state.movie.loading.GET_TRENDING_MOVIES
  };
}

export default connect(mapStateToProps, { getTrendingMovies })(Header);
