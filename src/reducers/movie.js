import {
  GET_TRENDING,
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_REVIEWS,
  GET_TOP_RATED,
  GET_TRAILER,
  SET_LOADING,
  MOVIE_ERROR,
  GET_CREDIT
} from '../constants/types';

const movieLists = [
  GET_TRENDING,
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_REVIEWS,
  GET_TOP_RATED,
  GET_TRAILER,
  SET_LOADING,
  MOVIE_ERROR,
  GET_CREDIT
];

const initialState = {
  movies: {
    [GET_TRENDING]: null,
    [GET_NOW_PLAYING]: null,
    [GET_POPULAR]: null,
    [GET_REVIEWS]: null,
    [GET_TOP_RATED]: null,
    [GET_TRAILER]: null,
    [SET_LOADING]: null,
    [MOVIE_ERROR]: null,
    [GET_CREDIT]: null
  },
  loading: {
    [GET_TRENDING]: true,
    [GET_NOW_PLAYING]: true,
    [GET_POPULAR]: true,
    [GET_REVIEWS]: true,
    [GET_TOP_RATED]: true,
    [GET_TRAILER]: true,
    [SET_LOADING]: true,
    [MOVIE_ERROR]: true,
    [GET_CREDIT]: true
  },
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  const movieList = movieLists.find(list => list === type);

  switch (type) {
    case movieList:
      return {
        ...state,
        movies: {
          ...state.movies,
          [movieList]: payload
        },
        loading: {
          ...state.loading,
          [movieList]: false
        }
      };
    default:
      return state;
  }
}
