import React from 'react';
import SwitchBtn from './SwitchBtn';
import { MOVIE, TVSHOW } from '../../constants';
import {
  GetNowPlaying,
  GetPopular,
  GetTopRated,
  GetNowPlayingTV,
  GetPopularTV,
  GetTopRatedTV
} from './CarouselContainer';
import { getNowPlayingMovies, getPopularMovies } from '../../actions/movie';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaType: MOVIE
    };
    this.typeToggle = this.typeToggle.bind(this);
  }

  typeToggle() {
    if (this.state.mediaType === MOVIE) {
      this.setState({
        mediaType: TVSHOW
      });
    } else {
      this.setState({
        mediaType: MOVIE
      });
    }

    console.log(this.state.mediaType);
  }

  render() {
    return (
      <section id="main__content__home">
        <div className="container">
          <SwitchBtn typeToggle={this.typeToggle} />
          <section className="movie__list">
            {this.state.mediaType === MOVIE ? (
              <>
                <GetNowPlaying header="Now Playing Movies" />
                <GetTopRated header="Top Rated Movies" />
                <GetPopular header="Popular Movies" />
              </>
            ) : (
              <>
                <GetNowPlayingTV header="Now Playing TV" />
                <GetTopRatedTV header="Top Rated TV" />
                <GetPopularTV header="Popular TV" />
              </>
            )}
          </section>
        </div>
      </section>
    );
  }
}

export default MainContent;
