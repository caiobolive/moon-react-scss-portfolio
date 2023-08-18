import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moontransitionparallax.scss";
import moonTransitionVideo from "/video/moon_transition_VP8.webm"

class MoonTransitionParallax extends Component {  
  render() {
    return (
      <div id="moon-transition-parallax" className="moon-transition-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.23" enableOnTouchDevice="true">
        <video 
            controls 
            muted 
            loop 
            autoPlay={true} 
            id="moon-transition-background" 
            className="moon-transition-parallax__transition-background parallax" >
            <source src={moonTransitionVideo} type="video/webm" />
          </video>
        </MouseParallax>
      </div>
    );
  }
};

export default MoonTransitionParallax;