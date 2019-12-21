import React from 'react';
import Swiper from 'swiper';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.carousel = new Swiper(this.myRef.current, {
      slidesPerView: this.props.slidesPerView,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      // breakpoints: {
      //   1145: {
      //     slidesPerView: 3
      //   },
      //   699: {
      //     slidesPerView: 2
      //   }
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  componentWillUnmount() {
    this.carousel.destroy();
  }

  render() {
    return (
      <div
        className={`swiper-container ${
          this.props.actor ? 'actor-container' : null
        }`}
        ref={this.myRef}
      >
        <div className="swiper-wrapper">{this.props.children}</div>

        {this.props.actor ? null : <div className="swiper-pagination" />}

        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    );
  }
}

export default Carousel;
