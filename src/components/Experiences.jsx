import "../styles/components/experiences.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';

const Experiences = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  return (
    <section id="experiences" className="experiences">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonSpaceParallax/>
      <div className="experiences__content">
        <div className="experiences__content__title">
          <h2>Experiences</h2>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
