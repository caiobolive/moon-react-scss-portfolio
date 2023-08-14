import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moonspaceparallax.scss";
import moonSpaceStarsBackground from "/img/moon_space_parallax/moon_space_stars_background.png"
import moonSpaceMoonBackground from "/img/moon_space_parallax/moon_space_moon_background.png"
import moonSpaceMoonForeground from "/img/moon_space_parallax/moon_space_moon_foreground.png"

class MoonSpaceParallax extends Component {  
  render() {
    return (
      <div id="moon-space-parallax" className="moon-space-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="0.2" enableOnTouchDevice="true">
          <img 
            id="moon-space-stars-background" 
            className="moon-space-parallax__stars-background parallax" 
            src={moonSpaceStarsBackground}
            data-speedx="0.15"
            data-speedy="0.15"
          />
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="0.15" enableOnTouchDevice="true">      
          <img 
            id="moon-space-space-foreground" 
            className="moon-space-parallax__space-foreground parallax" 
            src={moonSpaceMoonBackground}
            data-speedx="0.2"
            data-speedy="0.2"
          />
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="0.1" enableOnTouchDevice="true">
          <img 
            id="moon-space-moon-foreground" 
            className="moon-space-parallax__moon-foreground parallax" 
            src={moonSpaceMoonForeground}
            data-speedx="0.25"
            data-speedy="0.25"
          />      
        </MouseParallax>
      </div>
    );
  }
};

export default MoonSpaceParallax;