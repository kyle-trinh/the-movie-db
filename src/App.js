import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop } from './components/Layout';
import Landing from './components/HomePage/Landing';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Fragment>
          <Route exact path="/" component={Landing} />
        </Fragment>
      </ScrollToTop>
    </Router>
  );
}

export default App;
