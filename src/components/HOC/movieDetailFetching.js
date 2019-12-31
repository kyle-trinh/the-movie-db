import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { GET_DETAIL_SET_LOADING, GET_DETAIL_MOVIES } from '../../constants';
import Spinner from '../Layout/Spinner';

function movieDetailFetching(Component, fetchMovieDetail) {
  class HOComponent extends React.Component {
    componentDidMount() {
      const { id, mediaType } = this.props.match.params;
      this.props.fetchMovieDetail(id, mediaType);
    }

    componentDidUpdate(prevProps) {
      const { id, mediaType } = this.props.match.params;
      if (
        prevProps.match.params.id !== id ||
        prevProps.match.params.mediaType !== mediaType
      ) {
        store.dispatch({
          type: GET_DETAIL_SET_LOADING
        });

        this.props.fetchMovieDetail(id, mediaType);
      }
    }

    render() {
      return this.props.loading ? <Spinner /> : <Component {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      detail: state.multi.list[GET_DETAIL_MOVIES],
      loading: state.multi.loading[GET_DETAIL_MOVIES]
    };
  }

  return connect(mapStateToProps, { fetchMovieDetail })(HOComponent);
}

export default movieDetailFetching;
