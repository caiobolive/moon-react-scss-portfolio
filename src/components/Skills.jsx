import "../styles/components/skills.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  return (
    <section id="skills" className="skills">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonSpaceParallax/>
      <div className="skills__content">
        <div className="skills__content__title">
          <h2>Skills</h2>
        </div>
      </div>
    </section>
  );  
};

export default Skills;
