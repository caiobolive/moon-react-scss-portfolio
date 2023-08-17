import "../styles/components/skills.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <section id="skills" className="skills">
        <MoonSpaceParallax/>
        <div className="skills__content">
          <div className="skills__content__title">
            <h2>Skills</h2>
          </div>
        </div>
      </section>
    );
  }
};

export default Skills;
