import React from 'react';
import { movieGenre, TvGenre } from '../../constants/genres';
import { Link } from 'react-router-dom';
import {
  capitalize,
  normalizeGenre,
  findIdByGenre,
  findGenreById
} from '../../utils/utilities';
import { MOVIE, TVSHOW } from '../../constants';

class GenreSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listToggle: false
    };
  }

  render() {
    var genreList;
    if (this.props.mediaType === MOVIE) {
      genreList = movieGenre;
    } else if (this.props.mediaType === TVSHOW) {
      genreList = TvGenre;
    }
    console.log(this.props.currentGenre);
    return (
      <div className="genre__selector">
        <div
          className="genre__selector-current"
          onClick={() => {
            this.setState({ listToggle: !this.state.listToggle });
          }}
        >
          <p>
            {capitalize(
              findGenreById(
                findIdByGenre(this.props.currentGenre, this.props.mediaType),
                this.props.mediaType
              )
            )}
          </p>
          <i className="fas fa-sort-down fa-3x" />
        </div>
        {this.state.listToggle ? (
          <ul className="genre__selector-choices">
            {genreList.map(genre => (
              <Link
                onClick={() => {
                  this.setState({ listToggle: !this.state.listToggle });
                }}
                to={`/${
                  this.props.mediaType === MOVIE ? 'movies' : 'tv'
                }/${normalizeGenre(genre.name).toLowerCase()}/page=1`}
                key={genre.id}
                className="genre__selector-choices-item"
              >
                {genre.name}
              </Link>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default GenreSelector;
