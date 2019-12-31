import React from 'react';
import { Transition } from 'react-spring/renderprops';
import { config } from 'react-spring';
import SlideInfo from './SlideInfo';
import PropTypes from 'prop-types';

class HeaderSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({
        index: (this.state.index + 1) % this.props.movies.length
      });
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <Transition
        items={this.props.movies[this.state.index]}
        keys={item => item.id}
        from={{ opacity: '0' }}
        enter={{ opacity: '1' }}
        leave={{ opacity: '0' }}
        config={config.molasses}
      >
        {item => props => (
          <div
            className="slideshow"
            style={{
              ...props,
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${item.backdrop_path}`
            }}
          >
            <div className="bg-overlay" />
            <SlideInfo movie={item} />
          </div>
        )}
      </Transition>
    );
  }
}

HeaderSlide.propTypes = {
  movies: PropTypes.array.isRequired
};

export default HeaderSlide;
