import { movieGenre, TvGenre, MOVIE, TVSHOW } from '../constants';

export function findGenreById(id, type = MOVIE) {
  var genreFound;

  if (type === MOVIE) {
    genreFound = movieGenre.find(function matchId(movie) {
      return movie.id === id;
    });
  } else if (type === TVSHOW) {
    genreFound = TvGenre.find(function matchId(movie) {
      return movie.id === id;
    });
  }

  if (genreFound) {
    return genreFound.name;
  }

  return 'Unavailable';
}

export function findIdByGenre(name, type = MOVIE) {
  name = name.toLowerCase();
  var movieFound;

  if (type === MOVIE) {
    movieFound = movieGenre.find(function matchName(movie) {
      return normalizeGenre(movie.name).toLowerCase() === name;
    });
  } else if (type === TVSHOW) {
    movieFound = TvGenre.find(function matchName(movie) {
      return normalizeGenre(movie.name).toLowerCase() === name;
    });
  }

  return movieFound.id;
}

export function shortenOverview(description, limit = 40) {
  if (description.split(' ').length > limit) {
    description = description
      .split(' ')
      .splice(0, limit)
      .join(' ');

    description += '...';
  }

  return description;
}
export function shortenTitle(title) {
  if (title.split(' ') > 10) {
    title = title
      .split(' ')
      .splice(0, 10)
      .join(' ');

    title += '...';
  }

  return title;
}

export function capitalize(string) {
  if (typeof string !== 'string') return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function normalizeGenre(string) {
  string = string.replace(' & ', '-');
  string = string.replace(' ', '-');
  return string;
}

// export function formatCurrency(number) {
//   if (typeof number !== 'number') {
//     return 'Unavalable';
//   }
//   var result = parseInt(number);

//   var result2 = result.toString();
//   var first = result2.length % 3;

//   var arr = result2.split('');

//   console.log(arr);
//   console.log(first);
//   var count = 0;
//   while (first < result2.length) {
//     if (first > 0) {
//       arr.splice(first, 0, ',');
//     }

//     first += 3 + count;
//     count++;
//     console.log(first);
//   }

//   arr.unshift('$');
//   console.log(arr);

//   return arr.join('');
// }
