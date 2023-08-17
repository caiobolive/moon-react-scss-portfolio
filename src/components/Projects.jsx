import "../styles/components/projects.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="projects">
        <MoonSpaceParallax/>
        <div className="projects__content">
          <div className="projects__content__title">
            <h2>Projects</h2>
          </div>
        </div>
      </section>
    );
  }
};

export default Projects;
