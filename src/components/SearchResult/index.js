import React from 'react';
import { SEARCH_MOVIES } from '../../constants';
import Spinner from '../Layout/Spinner';
import { connect } from 'react-redux';
import { searchMovies } from '../../actions/multi';
import Header from './Header';
import MovieList from './MovieList';

class SearchResult extends React.Component {
  componentDidMount() {
    this.props.searchMovies(this.props.match.params.query);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.props.searchMovies(this.props.match.params.query);
    }
  }

  render() {
    return this.props.loading ? (
      <Spinner />
    ) : (
      <>
        {' '}
        <Header query={this.props.match.params.query} />{' '}
        <MovieList movies={this.props.movies} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.multi.list[SEARCH_MOVIES],
    loading: state.multi.loading[SEARCH_MOVIES]
  };
}

export default connect(mapStateToProps, { searchMovies })(SearchResult);
