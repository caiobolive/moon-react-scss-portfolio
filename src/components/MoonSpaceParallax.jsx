import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moonspaceparallax.scss";
import moonSpaceEarthForegroundVideo from "/video/earth_rotation_VP8.webm"
import moonSpaceMoonForegroundVideo from "/video/moon_earth_clip_VP8.webm"

class MoonSpaceParallax extends Component {  
  render() {
    return (
      <div id="moon-space-parallax" className="moon-space-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.24" enableOnTouchDevice="true">
          <div id="stars-layer-1-wrapper" className="moon-space-parallax__stars-background parallax">
            <div id="stars-layer-1"></div>
          </div>
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.23" enableOnTouchDevice="true">
          <div id="stars-layer-2-wrapper" className="moon-space-parallax__stars-background parallax">
            <div id="stars-layer-2"></div>
          </div>
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.22" enableOnTouchDevice="true">
          <div id="stars-layer-3-wrapper" className="moon-space-parallax__stars-background parallax">
            <div id="stars-layer-3"></div>
          </div>
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.15" enableOnTouchDevice="true">
          <video 
            controls 
            muted 
            loop 
            autoPlay="true" 
            id="moon-space-earth-foreground" 
            className="moon-space-parallax__earth-foreground parallax" >
            <source src={moonSpaceEarthForegroundVideo} type="video/webm" />
          </video>
        </MouseParallax>
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.1" enableOnTouchDevice="true">
          <video 
            controls 
            muted 
            loop 
            autoPlay="true" 
            id="moon-space-moon-foreground" 
            className="moon-space-parallax__moon-foreground parallax">
            <source src={moonSpaceMoonForegroundVideo} type="video/webm" />
          </video>
        </MouseParallax>
      </div>
    );
  }
};

export default MoonSpaceParallax;