import "../styles/components/intro.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  return (
    <section id="intro" className="intro">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonSpaceParallax/>
      <div className="intro__content">
        <div className="intro__content__title">
          <h2>Intro</h2>
        </div>
      </div>
    </section>
  );
};

export default Intro;
