import "../styles/components/experiences.scss";
import MoonZoomOutParallax from "./MoonZoomOutParallax";
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
      <MoonZoomOutParallax/>
      <div className="experiences__content">
      </div>
    </section>
  );
};

export default Experiences;
