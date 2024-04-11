import "../styles/components/projects.scss";
import MoonTransitionParallax from "./MoonTransitionParallax";
import PhotoSlider1 from "/img/project_slider_track/photo-slider-1-hd.png"
import PhotoSlider2 from "/img/project_slider_track/photo-slider-2-hd.png"
import PhotoSlider3 from "/img/project_slider_track/photo-slider-3-hd.png"
import PhotoSlider4 from "/img/project_slider_track/photo-slider-4-hd.png"
import PhotoSlider5 from "/img/project_slider_track/photo-slider-5-hd.png"
import bemGarden from "/video/bem-garden.mp4"
import proManage from "/video/pro-manage.mp4"
import Loading from "./Loading";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";

const Projects = () => {
  const { lang } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [dataPercentage, setDataPercentage] = useState(0);
  const [trackTransformAnimate, setTrackTransformAnimate] = useState('translate(0, -50%)');
  const trackRef = useRef(null);  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  const handleProjectsScroll = (e) => {
    if (isMousePressed) {
      const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

      setDataPercentage(nextPercentage);

      const trackElement = trackRef.current;

      trackElement.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`
        },
        {
          duration: 1200,
          fill: "forwards"
        }
      );

      for(const image of trackElement.getElementsByClassName("projects__content__track__image-container__image")) {
        image.animate({
          objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
      }
    }
  };

  const handleOnDown = (e) => {
    setIsMousePressed(true);
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setIsMousePressed(false);
    setMouseDownAt(0);
    setPrevPercentage(dataPercentage);
  };

  return (
    <section id="projects" className="projects">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonTransitionParallax/>
      <div className="projects__content">
        <div 
          className="projects__content__track lat-scroll" 
          id="projects-track"
          ref={trackRef}
          onMouseDown={handleOnDown} 
          onMouseUp={handleOnUp} 
          onMouseMove={handleProjectsScroll}
          onTouchStart={(event) => handleOnDown(event.touches[0])}
          onTouchEnd={(event) => handleOnUp(event.touches[0])}
          onTouchMove={(event) => handleProjectsScroll(event.touches[0])}>
          <div className="projects__content__track__image-container">
            {lang === "en" && 
            <div className="projects__content__track__image-container__text-container">
              <a href="https://bem-garden-ecommerce.vercel.app" className="projects__content__track__image-container__text-container__text neon-text">Visit Websystem</a>
              <a href="https://github.com/caiobolive/bem-garden-ecommerce" className="projects__content__track__image-container__text-container__text neon-text">View Source</a>
            </div>
            }
            {lang === "pt" && 
            <div className="projects__content__track__image-container__text-container">
              <a href="https://bem-garden-ecommerce.vercel.app" className="projects__content__track__image-container__text-container__text neon-text">Visitar Websystem</a>
              <a href="https://github.com/caiobolive/bem-garden-ecommerce" className="projects__content__track__image-container__text-container__text neon-text">Código fonte</a>
            </div>
            }
            <video  
              muted 
              loop 
              autoPlay={true} 
              id="bem-garden-video-demo" 
              className="projects__content__track__image-container__image" >
              <source src={bemGarden} type="video/webm" />
            </video>
          </div>
          <div className="projects__content__track__image-container">
            {lang === "en" && 
            <div className="projects__content__track__image-container__text-container">
              <a href="https://caiobolive.github.io/pro-manage" className="projects__content__track__image-container__text-container__text neon-text">Visit Websystem</a>
              <a href="https://github.com/caiobolive/pro-manage" className="projects__content__track__image-container__text-container__text neon-text">View Source</a>
            </div>
            }
            {lang === "pt" && 
            <div className="projects__content__track__image-container__text-container">
              <a href="https://caiobolive.github.io/pro-manage" className="projects__content__track__image-container__text-container__text neon-text">Visitar Websystem</a>
              <a href="https://github.com/caiobolive/pro-manage" className="projects__content__track__image-container__text-container__text neon-text">Código fonte</a>
            </div>
            }
            <video  
              muted 
              loop 
              autoPlay={true} 
              id="bem-garden-video-demo" 
              className="projects__content__track__image-container__image" >
              <source src={proManage} type="video/webm" />
            </video>
          </div>
          <div className="projects__content__track__image-container">
            {lang === "en" && <span className="projects__content__track__image-container__text neon-text">Coming Soon</span>}
            {lang === "pt" && <span className="projects__content__track__image-container__text neon-text">Em Breve</span>}
            <img className="projects__content__track__image-container__image" src={PhotoSlider3} draggable={false} />
          </div>
          <div className="projects__content__track__image-container">
            {lang === "en" && <span className="projects__content__track__image-container__text neon-text">Coming Soon</span>}
            {lang === "pt" && <span className="projects__content__track__image-container__text neon-text">Em Breve</span>}
            <img className="projects__content__track__image-container__image" src={PhotoSlider4} draggable={false} />
          </div>
          <div className="projects__content__track__image-container">
            {lang === "en" && <span className="projects__content__track__image-container__text neon-text">Coming Soon</span>}
            {lang === "pt" && <span className="projects__content__track__image-container__text neon-text">Em Breve</span>}
            <img className="projects__content__track__image-container__image" src={PhotoSlider5} draggable={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
