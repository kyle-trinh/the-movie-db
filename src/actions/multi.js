import axios from 'axios';
import {
  PATH_BASE,
  API_KEY,
  MOVIE,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_GENRE_ERROR,
  GET_DETAIL_MOVIES,
  GET_DETAIL_MOVIES_ERROR,
  SEARCH_MOVIES,
  SEARCH_MOVIES_ERROR,
} from '../constants';

export function getMovieByGenre(genreId, page = 1, mediaType = MOVIE) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/discover/${mediaType}?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=${page}`
      );

      dispatch({
        type: GET_MOVIES_BY_GENRE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_MOVIES_BY_GENRE_ERROR,
        payload: err.response.data.status_message,
      });
    }
  };
}

export function getMovieDetails(id, mediaType = MOVIE) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/${mediaType}/${id}?api_key=${API_KEY}&language=en-US`
      );

      dispatch({
        type: GET_DETAIL_MOVIES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_DETAIL_MOVIES_ERROR,
        payload: err.response.data.status_message,
      });
    }
  };
}

export function searchMovies(query) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/search/multi?api_key=${API_KEY}&query=${query}`
      );

      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.results,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_MOVIES_ERROR,
        payload: err.response.data.status_message,
      });
    }
  };
}
