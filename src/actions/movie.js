import axios from 'axios';
import {
  API_KEY,
  PATH_BASE,
  GET_DETAIL_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_TRENDING_MOVIES,
  MOVIE_ERROR,
  MOVIE,
  SEARCH_MOVIES,
  GET_TRENDING_MOVIES_ERROR,
  GET_NOW_PLAYING_MOVIES_ERROR,
  GET_POPULAR_MOVIES_ERROR,
  GET_REVIEWS_ERROR,
  GET_TOP_RATED_MOVIES_ERROR,
  GET_TRAILER_ERROR,
  SET_LOADING_ERROR,
  GET_CREDIT_ERROR,
  GET_MOVIES_BY_GENRE_ERROR,
  GET_DETAIL_MOVIES_ERROR,
  SEARCH_MOVIES_ERROR
} from '../constants';
import { GET_MOVIES_BY_GENRE } from '../constants/types';

// get Trending movies for Landing Page Header
export function getTrendingMovies() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/trending/movie/day?api_key=${API_KEY}`
      );

      dispatch({
        type: GET_TRENDING_MOVIES,
        payload: res.data.results
      });
    } catch (err) {
      dispatch({
        type: GET_TRENDING_MOVIES_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}

// get now playing movies
export function getNowPlayingMovies() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );

      dispatch({
        type: GET_NOW_PLAYING_MOVIES,
        payload: res.data.results
      });
    } catch (err) {
      dispatch({
        type: GET_NOW_PLAYING_MOVIES_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}

// get popular movies
export function getPopularMovies() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: res.data.results
      });
    } catch (err) {
      dispatch({
        type: GET_POPULAR_MOVIES_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}

// get top rated movies
export function getTopRatedMovies() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      dispatch({
        type: GET_TOP_RATED_MOVIES,
        payload: res.data.results
      });
    } catch (err) {
      dispatch({
        type: GET_TOP_RATED_MOVIES_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}

// get movie list by genre
export function getMovieByGenre(genreId, page = 1, mediaType = MOVIE) {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/discover/${
          mediaType === MOVIE ? 'movie' : 'tv'
        }?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`
      );

      dispatch({
        type: GET_MOVIES_BY_GENRE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GET_MOVIES_BY_GENRE_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}

export function getMovieDetails(id, mediaType = MOVIE) {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
      );

      dispatch({
        type: GET_DETAIL_MOVIES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: GET_DETAIL_MOVIES_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}

export function searchMovies(query) {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/search/multi/?api_key=${API_KEY}&query=${query}`
      );

      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results
      });
    } catch (err) {
      dispatch({
        type: SEARCH_MOVIES_ERROR,
        payload: err.response.data.status_message
      });
    }
  };
}
