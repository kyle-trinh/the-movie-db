import React from 'react';
import Header from './Header';
import TvHeader from './TvHeader';
import Body from './Body';
import { getMovieDetails } from '../../actions/movie';
import withMovieFetching from '../HOC/withMovieFetching';
import { GET_DETAIL_MOVIES, TVSHOW } from '../../constants';
import { PATH_BASE, API_KEY, MOVIE } from '../../constants';
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
    this.mediaType = this.props.match.params.mediaType;
    this.movieId = this.props.match.params.id;
    this.fetchData = this.fetchData.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  async fetchData() {
    const cast = await axios.get(
      `${PATH_BASE}/${this.mediaType}/${this.movieId}/credits?api_key=${API_KEY}`
    );

    const trailers = await axios.get(
      `${PATH_BASE}/${this.mediaType}/${this.movieId}/videos?api_key=${API_KEY}`
    );

    const reviews = await axios.get(
      `${PATH_BASE}/${this.mediaType}/${this.movieId}/reviews?api_key=${API_KEY}`
    );

    this.setState({
      cast: {
        list: cast.data.cast,
        loading: false
      },
      trailers: {
        list: trailers.data.results,
        loading: false
      },
      reviews: {
        list: reviews.data.results,
        loading: false
      }
    });
  }

  renderHeader() {
    if (this.mediaType === MOVIE) {
      return <Header movies={this.props.movies} />;
    } else if (this.mediaType === TVSHOW) {
      return <TvHeader movies={this.props.movies} />;
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
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
      this.fetchData();
    }
  }

  render() {
    return (
      <DataFetchContext.Provider value={this.state}>
        {this.renderHeader()}

        <Body movies={this.props.movies} cast={this.state.cast} />
      </DataFetchContext.Provider>
    );
  }
}

const MovieDetailPage = withMovieFetching(
  MovieDetail,
  getMovieDetails,
  GET_DETAIL_MOVIES,
  MOVIE,
  Spinner
);

export default MovieDetailPage;
