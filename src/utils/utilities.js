import { movieGenre, TvGenre } from '../constants';

export function findGenreById(id, type) {
  var genreFound;
  console.log(id);
  if (type === 'movie') {
    genreFound = movieGenre.find(function matchId(movie) {
      return movie.id === id;
    });
  } else {
    genreFound = TvGenre.find(function matchId(movie) {
      return movie.id === id;
    });
  }

  if (genreFound) {
    return genreFound.name;
  }

  return 'Unavailable';
}

export function findIdByGenre(name, type) {
  name = name.toLowerCase();
  var movieFound;

  if (type === 'movie') {
    movieFound = movieGenre.find(function matchName(movie) {
      return movie.name === name;
    });
  } else {
    movieFound = TvGenre.find(function matchName(movie) {
      return movie.name === name;
    });
  }

  return movieFound.id;
}
