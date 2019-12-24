import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants';
import { withRouter } from 'react-router-dom';
import { MOVIE, TVSHOW } from '../../constants';
import InProgress from './InProgress';
import SearchBox from './SearchBox';

function handleCurrentChange(pathname) {
  var prefix = pathname.split('/')[1];
  if (prefix === MOVIE) {
    return 'movies';
  } else if (prefix === TVSHOW) {
    return 'tv shows';
  } else if (prefix === '') {
    return 'home';
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: handleCurrentChange(this.props.location.pathname),
      showModal: false
    };
  }

  componentDidUpdate(prevProps) {
    if (
      handleCurrentChange(prevProps.location.pathname) !==
      handleCurrentChange(this.props.location.pathname)
    ) {
      this.setState({
        current: handleCurrentChange(this.props.location.pathname)
      });
    }
  }

  render() {
    console.log(this.props.location.pathname.split('/')[1]);
    return (
      <div className="navbar">
        <div className="container">
          <nav className="menu">
            <div className="menu-main">
              <Link to="/">
                <h2>movieDB</h2>
              </Link>
              <ul className="menu-nav">
                {MENU_ITEMS.map((item, index) => {
                  return (
                    <li
                      className={
                        item.title.toLowerCase() === this.state.current
                          ? 'current nav-item'
                          : 'nav-item'
                      }
                      key={index}
                    >
                      <Link to={item.url} className="nav-link">
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="search-box-profile">
              <SearchBox />
              <div
                className="profile"
                onClick={() => this.setState({ showModal: true })}
              ></div>
            </div>
          </nav>
        </div>

        <InProgress
          showModal={this.state.showModal}
          setShowModal={() => this.setState({ showModal: false })}
        />
      </div>
    );
  }
}

export default withRouter(Navbar);
