import { GET_TRENDING } from '../actions/types';

const initialState = {
  movies: {
    GET_TRENDING: null
  },
  loading: {
    GET_TRENDING: true
  },
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
}
