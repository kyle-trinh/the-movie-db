import React from 'react';
import { MOVIE, TVSHOW } from '../../constants';

function SwitchBtn(props) {
  return (
    <div className="switch__btn">
      <div className="switch__btn__container">
        <label htmlFor="switch__btn__toggle">
          <input
            type="checkbox"
            id="switch__btn__toggle"
            onChange={e => {
              e.target.checked
                ? props.typeToggle(MOVIE)
                : props.typeToggle(TVSHOW);
            }}
          ></input>

          <span className="switch__btn__box">
            <span className="switch__btn__movie">Movie</span>
            <span className="switch__btn__tv">TV Show</span>
            <span className="switch__btn__slider"></span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default SwitchBtn;
