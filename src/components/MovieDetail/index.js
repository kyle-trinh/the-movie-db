import React from 'react';
import Header from './Header';
import Body from './Body';
import { getMovieDetails } from '../../actions/movie';
import withMovieFetching from '../HOC/withMovieFetching';
import { GET_DETAIL_MOVIES } from '../../constants';
import { PATH_BASE, API_KEY } from '../../constants';
import axios from 'axios';
import DataFetchContext from './context';
import Spinner from '../Layout/Spinner';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cast: {
        list: null,
        loading: true
      },
      trailers: {
        list: null,
        loading: true
      },
      reviews: {
        list: null,
        loading: true
      }
    };
  }

  async componentDidMount() {
    const cast = await axios.get(
      `${PATH_BASE}/${this.props.mediaType === 'MOVIE' ? 'movie' : 'tv'}/${
        this.props.movies.id
      }/credits?api_key=${API_KEY}`
    );

    this.setState({
      cast: {
        list: cast.data.cast,
        loading: false
      }
    });

    const trailers = await axios.get(
      `${PATH_BASE}/movie/${this.props.movies.id}/videos?api_key=${API_KEY}`
    );

    this.setState({
      trailers: {
        list: trailers.data.results,
        loading: false
      }
    });

    const reviews = await axios.get(
      `${PATH_BASE}/movie/${this.props.movies.id}/reviews?api_key=${API_KEY}`
    );

    this.setState({
      reviews: {
        list: reviews.data.results,
        loading: false
      }
    });

    console.log(cast);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.movies.id !== this.props.movies.id) {
      this.setState({
        cast: {
          loading: true
        },
        trailers: {
          loading: true
        },
        reviews: {
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

      const trailers = await axios.get(
        `${PATH_BASE}/movie/${this.props.movies.id}/videos?api_key=${API_KEY}`
      );

      this.setState({
        trailers: {
          list: trailers.data.results,
          loading: false
        }
      });

      const reviews = await axios.get(
        `${PATH_BASE}/movie/${this.props.movies.id}/reviews?api_key=${API_KEY}`
      );

      this.setState({
        reviews: {
          list: reviews.data.results,
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
      <DataFetchContext.Provider value={this.state}>
        <Header movies={this.props.movies} />
        <Body movies={this.props.movies} cast={this.state.cast} />
      </DataFetchContext.Provider>
    );
  }
}

export default withMovieFetching(
  MovieDetail,
  getMovieDetails,
  GET_DETAIL_MOVIES,
  'MOVIE',
  Spinner
);
