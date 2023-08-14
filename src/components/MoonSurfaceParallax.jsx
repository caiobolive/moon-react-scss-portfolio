import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moonsurfaceparallax.scss";
import moonSurfaceForeground from "/img/moon_surface_parallax/moon_surface_foreground.png"
import moonSurfaceMiddleground from "/img/moon_surface_parallax/moon_surface_middleground.png"
import moonSurfaceMoon from "/img/moon_surface_parallax/moon_surface_moon.png"

class MoonSurfaceParallax extends Component {  
  render() {
    return (
      <div id="moon-surface-parallax" className="moon-surface-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="0.2" enableOnTouchDevice="true">
          <img 
            id="moon-surface-moon" 
            className="moon-surface-parallax__moon parallax" 
            src={moonSurfaceMoon}
            data-speedx="0.15"
            data-speedy="0.15"
          />
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="0.15" enableOnTouchDevice="true">      
          <img 
            id="moon-surface-middleground" 
            className="moon-surface-parallax__surface-middleground parallax" 
            src={moonSurfaceMiddleground}
            data-speedx="0.2"
            data-speedy="0.2"
          />
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="0.1" enableOnTouchDevice="true">
          <img 
            id="moon-surface-foreground" 
            className="moon-surface-parallax__surface-foreground parallax" 
            src={moonSurfaceForeground}
            data-speedx="0.25"
            data-speedy="0.25"
          />      
        </MouseParallax>
      </div>
    );
  }
};

export default MoonSurfaceParallax;