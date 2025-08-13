import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moonwindowparallax.scss";
import moonWindowFrame from "/img/moon_window_parallax/moon_window_frame.png";
import moonWindowProfile from "/img/moon_window_parallax/moon_window_profile.jpg";
import moonWindowReflex from "/video/moon_window_reflex_VP8.webm";

class MoonWindowParallax extends Component {
  render() {
    return (
      <div id="moon-window-parallax" className="moon-window-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.05" enableOnTouchDevice="true">
          <img
            id="moon-window-profile"
            className="moon-window-parallax__window-profile parallax"
            src={moonWindowProfile}
          />
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.08" enableOnTouchDevice="true">
        <video
            controls
            muted
            loop
            autoPlay={true}
            id="moon-window-reflex"
            className="moon-window-parallax__window-reflex parallax" >
            <source src={moonWindowReflex} type="video/webm" />
          </video>
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.08" enableOnTouchDevice="true">
          <img
            id="moon-window-frame"
            className="moon-window-parallax__window-frame parallax"
            src={moonWindowFrame}
          />
        </MouseParallax>
      </div>
    );
  }
};

export default MoonWindowParallax;