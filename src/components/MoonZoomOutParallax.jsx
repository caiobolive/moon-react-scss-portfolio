import React, { Component } from 'react';
import { MouseParallax } from "react-just-parallax";
import "../styles/components/moonzoomoutparallax.scss";
import moonZoomOutVideo from "/video/moon_zoom_out_VP8.webm"

class MoonZoomOutParallax extends Component {  
  render() {
    return (
      <div id="moon-zoom-out-parallax" className="moon-zoom-out-parallax">
        <MouseParallax isAbsolutelyPositioned="true" strength="-0.23" enableOnTouchDevice="true">
        <video 
            controls 
            muted 
            loop 
            autoPlay={true} 
            id="moon-zoom-out-background" 
            className="moon-zoom-out-parallax__zoom-out-background parallax" >
            <source src={moonZoomOutVideo} type="video/webm" />
          </video>
        </MouseParallax>
      </div>
    );
  }
};

export default MoonZoomOutParallax;