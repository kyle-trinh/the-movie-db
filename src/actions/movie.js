import axios from 'axios';
import {
  API_KEY,
  PATH_BASE,
  GET_CREDIT,
  GET_DETAIL_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_REVIEWS,
  GET_TOP_RATED_MOVIES,
  GET_TRAILER,
  GET_TRENDING_MOVIES,
  SET_LOADING,
  MOVIE_ERROR
} from '../constants';

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
      console.log(err.response.data.status_message);
      dispatch({
        type: MOVIE_ERROR,
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
    } catch (err) {}
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
    } catch (err) {}
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
    } catch (err) {}
  };
}
