import React from 'react';
import SwitchBtn from './SwitchBtn';
import { MOVIE, TVSHOW } from '../../constants';
import { GetNowPlaying, GetPopular, GetTopRated } from './CarouselContainer';
import { getNowPlayingMovies, getPopularMovies } from '../../actions/movie';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaType: MOVIE
    };
  }

  render() {
    const typeToggle = type => {
      this.setState({
        mediaType: type
      });
      console.log(this.state.mediaType);
    };

    return (
      <section id="main__content__home">
        <div className="container">
          <SwitchBtn typeToggle={typeToggle} />
          <GetNowPlaying header="Now Playing Movies" />
          <GetTopRated header="Top Rated Movies" />
          <GetPopular header="Popular Movies" />
        </div>
      </section>
    );
  }
}

export default MainContent;
