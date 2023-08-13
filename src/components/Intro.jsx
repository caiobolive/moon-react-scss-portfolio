import "../styles/components/intro.scss";
import MoonEarthParallax from "./MoonEarthParallax"
import React, { Component } from 'react';

class Intro extends Component {

  handleMouseMove  = (e) => {
    let xValue = 0;
    let yValue = 0;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;    

    this.MoonEarthParallaxRef.handleParallaxEffect(xValue, yValue);
  };

  render() {
    return (
      <section id="intro" className="intro" onMouseMove={this.handleMouseMove}>
        <MoonEarthParallax ref={ref => this.MoonEarthParallaxRef = ref}/>
        <div className="intro__content">
          <div className="intro__content__title">
            <h2>Intro</h2>
          </div>
        </div>
      </section>
    );
  }
};

export default Intro;
