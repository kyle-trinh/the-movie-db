import React from 'react';
import Header from './Header';
import Body from './Body';
import { getMovieDetails } from '../../actions/movie';
import withMovieFetching from '../HOC/withMovieFetching';
import { GET_DETAIL_MOVIES } from '../../constants';

class MovieDetail extends React.Component {
  // componentDidMount() {
  //   this.props.getMovieDetails(this.props.match.params.id);
  // }

  render() {
    console.log(this.props.movies);
    return (
      <>
        <Header movies={this.props.movies} />
        <Body movies={this.props.movies} />
      </>
    );
  }
}

export default withMovieFetching(
  MovieDetail,
  getMovieDetails,
  GET_DETAIL_MOVIES,
  'MOVIE'
);
