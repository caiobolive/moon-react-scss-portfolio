import "../styles/components/intro.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  const [animationIn, setIsAnimationIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationIn(false);
    }, 2000); 
  }, []);

  return (
    <section id="intro" className="intro">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonSpaceParallax/>
      <div className="intro__content">
        <div className="intro__content__title">
          <h6 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Welcome to</h6>
          <h1 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Caio Oliveira's</h1>
          <h4 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Front-End</h4>
          <h6 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Portfolio</h6>
        </div>
        <div className="intro__content__see-more">
          <Link to="/about" className="intro__content__see-more__link">
            <h6 className={animationIn ? "intro__content__see-more__link__text neon-flicker-in" : "intro__content__see-more__link__text"}>See More &gt; &gt;</h6>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
