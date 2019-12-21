import React from 'react';

function ActorInfo({ actor }) {
  return (
    <>
      <div className="carousel__movie-overlay" />
      <div className="actor__info">
        <h2 className="actor__info-name">{actor.name}</h2>
        <p className="actor__info-character">{actor.character}</p>
      </div>
      {/* <div className="carousel__movie-info">
        <h3 className="carousel__movie-info-title"></h3>
        <p className="carousel__movie-info-genre"></p>
        <div className="carousel__movie-info-vote">
          <p></p>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default ActorInfo;
