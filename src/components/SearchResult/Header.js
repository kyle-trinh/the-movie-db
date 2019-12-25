import React from 'react';

function Header({ query }) {
  return (
    <header id="header-movie">
      <div className="container">
        <div className="header__movie-content">
          <h1 className="section-heading">Search Result</h1>
          <div className="underline" />
          <p className="text-lead">for keyword "{query.toUpperCase()}"</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
