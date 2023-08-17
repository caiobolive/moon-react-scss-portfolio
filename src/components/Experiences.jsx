import "../styles/components/experiences.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import React, { Component } from 'react';

class Experiences extends Component {
  render() {
    return (
      <section id="experiences" className="experiences">
        <MoonSpaceParallax/>
        <div className="experiences__content">
          <div className="experiences__content__title">
            <h2>Experiences</h2>
          </div>
        </div>
      </section>
    );
  }
};

export default Experiences;
