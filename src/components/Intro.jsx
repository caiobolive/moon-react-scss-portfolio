import "../styles/components/intro.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
      <section id="intro" className="intro">
        <MoonSpaceParallax/>
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
