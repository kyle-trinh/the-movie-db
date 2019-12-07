import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <nav className="menu">
            <div className="menu-main">
              <Link to="/">
                <h2>movieDB</h2>
              </Link>
              <ul className="menu-nav">
                {MENU_ITEMS.map(function matchItem(item, index) {
                  return (
                    <li className="nav-item" key={index}>
                      <Link to={item.url} className="nav-link">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="search-box-profile">
              <form>
                <input
                  type="text"
                  placeholder="Enter a movie name..."
                  className="search-input"
                />
                <button className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
              </form>
              <div className="profile"></div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
