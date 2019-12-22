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
                <div className="movie__list__carousel__container">
                  <GetNowPlaying header="Now Playing Movies" />
                </div>

                <div className="movie__list__carousel__container">
                  <GetTopRated header="Top Rated Movies" />
                </div>

                <div className="movie__list__carousel__container">
                  <GetPopular header="Popular Movies" />
                </div>
              </>
            ) : (
              <>
                <div className="movie__list__carousel__container">
                  <GetNowPlayingTV header="Now Playing TV" />
                </div>
                <div className="movie__list__carousel__container">
                  <GetTopRatedTV header="Top Rated TV" />
                </div>
                <div className="movie__list__carousel__container">
                  <GetPopularTV header="Popular TV" />
                </div>
              </>
            )}
          </section>
        </div>
      </section>
    );
  }
}

export default MainContent;
