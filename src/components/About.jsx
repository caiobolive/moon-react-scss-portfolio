import "../styles/components/about.scss";
import MoonSurfaceParallax from "./MoonSurfaceParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  return (
    <section id="about" className="about">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonSurfaceParallax/>
      <div className="about__content">
        <div className="about__content__title">
          <h2>About</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
