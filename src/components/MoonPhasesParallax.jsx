import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moonphasesparallax.scss";
import moonPhasesVideo from "/video/moon_phases_clip_VP8.webm"

class MoonPhasesParallax extends Component {  
  render() {
    return (
      <div id="moon-phases-parallax" className="moon-phases-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.1" enableOnTouchDevice="true">
          <video 
            controls 
            muted 
            loop 
            autoPlay={true} 
            id="moon-phases-background" 
            className="moon-phases-parallax__phases-background parallax" >
            <source src={moonPhasesVideo} type="video/webm" />
          </video>
        </MouseParallax>
      </div>
    );
  }
};

export default MoonPhasesParallax;