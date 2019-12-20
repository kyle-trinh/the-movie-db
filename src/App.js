import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop, Navbar, Footer } from './components/Layout';
import Landing from './components/HomePage/Landing';
import Movie from './components/Movies';
import MovieDetail from './components/MovieDetail';
import withMovieFetching from './components/HOC/withMovieFetching';
import { MOVIE, TVSHOW, GET_DETAIL_MOVIES } from './constants';
import { getMovieDetails } from './actions/movie';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route
              exact
              path="/:mediaType/:genre/page=:pageNum"
              render={function(props) {
                return (
                  <Movie
                    {...props}
                    mediaType={
                      props.match.params.mediaType === 'movies' ? MOVIE : TVSHOW
                    }
                  />
                );
              }}
              // component={Movie}
            />
            <Route
              exact
              path="/:mediaType/details/:id"
              render={function(props) {
                return (
                  <MovieDetail
                    {...props}
                    mediaType={
                      props.match.params.mediaType === 'movies' ? MOVIE : TVSHOW
                    }
                  />
                );
              }}
            />
          </Switch>
          <Footer />
        </Fragment>
      </ScrollToTop>
    </Router>
  );
}

export default App;
