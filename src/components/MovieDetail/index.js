import React from 'react';
import Header from './Header';
import Body from './Body';
import { getMovieDetails } from '../../actions/movie';
import withMovieFetching from '../HOC/withMovieFetching';
import { GET_DETAIL_MOVIES } from '../../constants';
import { PATH_BASE, API_KEY } from '../../constants';
import axios from 'axios';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: {
        list: null,
        loading: true
      }
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `${PATH_BASE}/${this.props.mediaType === 'MOVIE' ? 'movie' : 'tv'}/${
        this.props.movies.id
      }/credits?api_key=${API_KEY}`
    );

    this.setState({
      cast: {
        list: res.data.cast,
        loading: false
      }
    });

    console.log(res);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.movies.id !== this.props.movies.id) {
      this.setState({
        cast: {
          loading: true
        }
      });
      const res = await axios.get(
        `${PATH_BASE}/${this.props.mediaType === 'MOVIE' ? 'movie' : 'tv'}/${
          this.props.movies.id
        }/credits?api_key=${API_KEY}`
      );

      this.setState({
        cast: {
          list: res.data.cast,
          loading: false
        }
      });
    }
  }

  // componentDidMount() {
  //   this.props.getMovieDetails(this.props.match.params.id);
  // }

  render() {
    console.log(this.props.movies);
    return (
      <>
        <Header movies={this.props.movies} />
        <Body movies={this.props.movies} cast={this.state.cast} />
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
