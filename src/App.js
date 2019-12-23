import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop, Navbar, Footer } from './components/Layout';
import Landing from './components/HomePage/Landing';
import Movie from './components/Movies';
import MovieDetail from './components/MovieDetail';
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
              component={Movie}
              // component={Movie}
            />
            <Route
              exact
              path="/:mediaType/details/:id"
              component={MovieDetail}
              // render={function(props) {
              //   if (props.match.params.mediaType === MOVIE) {
              //     return <MovieDetailPage {...props} mediaType={MOVIE} />;
              //   } else if (props.match.params.mediaType === TVSHOW) {
              //     return <TVDetailPage {...props} mediaType={TVSHOW} />;
              //   }
              // }}
            />
          </Switch>
          <Footer />
        </Fragment>
      </ScrollToTop>
    </Router>
  );
}

export default App;
