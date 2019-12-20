import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop, Navbar, Footer } from './components/Layout';
import Landing from './components/HomePage/Landing';
import Movie from './components/Movies';
import { MOVIE, TVSHOW } from './constants';

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
          </Switch>
          <Footer />
        </Fragment>
      </ScrollToTop>
    </Router>
  );
}

export default App;
