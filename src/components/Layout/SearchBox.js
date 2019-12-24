import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import debounce from 'lodash.debounce';
import { withRouter } from 'react-router-dom';
import { searchMovies } from '../../actions/movie';
import { connect } from 'react-redux';
import { SEARCH_MOVIES } from '../../constants';
import { Link } from 'react-router-dom';
import SpinnerSm from '../Layout/SpinnerSm';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.routeToItem = this.routeToItem.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.searchTerm = this.searchTerm.bind(this);
  }

  routeToItem(item) {
    this.props.history.push(`/${item.media_type}/details/${item.id}`);
  }

  searchTerm = debounce(input => {
    this.props.searchMovies(input);
  }, 1000);

  onSearchSubmit(query) {
    const searchMovies = this.props.searchMovies;
    const abc = debounce(function() {
      searchMovies(query);
    }, 350);

    abc();
  }

  render() {
    resetIdCounter();
    return (
      <Downshift
        onChange={this.routeToItem}
        itemToString={item => (item === null ? '' : item.title)}
      >
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          closeMenu
        }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              this.props.history.push(`/search/q=${inputValue}`);
              closeMenu();
              inputValue = '';
            }}
          >
            <input
              {...getInputProps({
                type: 'text',
                placeholder: 'Enter a movie name...',
                className: 'search-input',
                onChange: e => {
                  e.persist();
                  this.searchTerm(e.target.value);
                  // const searchMovies = this.props.searchMovies;
                  // const onSearchSubmit = debounce(e => {
                  //   searchMovies(e.target.value);
                  // }, 1000);
                  // onSearchSubmit(e);
                }
              })}
            />

            {isOpen && (
              <div className="result__container">
                {this.props.loading ? (
                  <SpinnerSm />
                ) : (
                  this.props.searchResult.slice(0, 5).map((item, index) => (
                    <div
                      {...getItemProps({ item })}
                      className={
                        index === highlightedIndex
                          ? 'result-item highlighted'
                          : 'result-item'
                      }
                      key={item.id}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        alt="icon"
                      />
                      <div className="result-item-detail">
                        <h4>
                          {' '}
                          {item.title || item.name || 'Title not available'}
                        </h4>
                      </div>
                    </div>
                  ))
                )}

                {this.props.loading
                  ? null
                  : this.props.searchResult.length >= 4 && (
                      <Link to={`/search/q=${inputValue}`} className="see-more">
                        See more...
                      </Link>
                    )}

                {this.props.loading
                  ? null
                  : !this.props.searchResult.length && (
                      <div className="result-item">
                        No result for {inputValue}
                      </div>
                    )}
              </div>
            )}
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </form>
        )}
      </Downshift>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.movie.movies[SEARCH_MOVIES],
    loading: state.movie.loading[SEARCH_MOVIES]
  };
}

export default connect(mapStateToProps, { searchMovies })(
  withRouter(SearchBox)
);
