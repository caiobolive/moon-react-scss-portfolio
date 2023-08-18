import "../styles/components/projects.scss";
import MoonTransitionParallax from "./MoonTransitionParallax";
import PhotoSlider1 from "/img/project_slider_track/photo-slider-1-hd.png"
import PhotoSlider2 from "/img/project_slider_track/photo-slider-2-hd.png"
import PhotoSlider3 from "/img/project_slider_track/photo-slider-3-hd.png"
import PhotoSlider4 from "/img/project_slider_track/photo-slider-4-hd.png"
import PhotoSlider5 from "/img/project_slider_track/photo-slider-5-hd.png"
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  return (
    <section id="projects" className="projects">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonTransitionParallax/>
      <div className="projects__content">
        <div className="projects__content__title">
          <h2>Projects</h2>
        </div>
        <div className="projects__content__track">
          <img className="projects__content__track__image" src={PhotoSlider1} />
          <img className="projects__content__track__image" src={PhotoSlider2} />
          <img className="projects__content__track__image" src={PhotoSlider3} />
          <img className="projects__content__track__image" src={PhotoSlider4} />
          <img className="projects__content__track__image" src={PhotoSlider5} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
