import "../styles/components/about.scss";
import MoonWindowParallax from "./MoonWindowParallax";
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
      <MoonWindowParallax/>
      <div className="about__content">
        <div className="about__content__section-wrapper">
          <div className="about__content__section-wrapper__window-wrapper">
            <div className="about__content__section-wrapper__window-wrapper__window-spacer"></div>
            <div className="about__content__section-wrapper__window-wrapper__window-text">
              <div className="about__content__section-wrapper__window-wrapper__window-text__text-section">
                <h4 className="neon-text">My name is</h4>
                <h1 className="neon-text">Caio Oliveira</h1>
              </div>
              <div className="about__content__section-wrapper__window-wrapper__window-text__text-section">
                <h6 className="neon-text">I'm a</h6>
                <h4 className="neon-text">Graduated Computer Engineer</h4>
              </div>
              <div className="about__content__section-wrapper__window-wrapper__window-text__text-section">
              <h6 className="neon-text">more specifically a</h6>
                <h4 className="neon-text">Front End Web Developer</h4>
                <h6 className="neon-text">with 2+ years of experience</h6>
              </div>
            </div>
          </div>
          <div className="about__content__section-wrapper__more-info-wrapper">
            <div className="about__content__section-wrapper__more-info-wrapper__text-section">
              <h1 className="neon-text">My Journey</h1>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2017-2022</h4>
                <span>Attended to my university PUC-GO (Pontifical Catholic University of Goiás) for five years in the bachelor degree of computer engineering (totaling 4100+ hours), the degree fully prepares the student for everything to do with:</span>
                <span style={{marginTop: "4px"}}>Logic and Programming: starting from basic algorithm and going through OOP, Data structures (I-II), Programming techniques (I-II), Discrete Mathematics (Computer Fundamentals) (I-IV), Machine Language, Data Banks, Compilers, Recursion, Algorythm Project and Analysis, Dynamic Programming (What I used to write my final paper) and so on.</span>
                <span style={{marginTop: "4px"}}>Math: starting from calculus I and II through Analytic Geometry (I and II), Linear Algebra, Ordinary Differential Equations (ODEs) and Statistics</span>
                <span style={{marginTop: "4px"}}>Electrics: Digital Systems, Electric Circuits (I-II), Microprocessors, Microcontrollers, Computer Architecture, Industrial Automations</span>
                <span style={{marginTop: "4px"}}>Software: Software Engineering, Requirements Engineering, System Security, Operational Systems, AI</span>
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2021-2022</h4>
                <span>Published my Final Paper on a Application to Define Vaccine Procurement Scheduling, Using Dynamic Programming to Reduce Financial Costs, using Dynamic Programming</span>
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2021-2022</h4>
                <span>Finished the course "100 Days Of Code - 2023 Web Development Bootcamp" from Academind, taught by Maximilian Schwarzmüller (80h) it goes through every essential for both Front and Back End with up to date material</span>
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2022-Current</h4>
                <span>Worked as a Front End Web Developer at Cilia Technology - Working mainly on Angular, I also had the opportunity to learn and put to practise many concepts of good practises, security, web design, scrum, unit testing, etc.</span>
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2023</h4>
                <span>Finished the course "Angular - The Complete Guide (2023 Edition)" from Academind, taught by Maximilian Schwarzmüller (36h)</span>
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2023</h4>
                <span>Finished the course "React - The Complete Guide 2023 (incl. React Router & Redux)" from Academind, taught by Maximilian Schwarzmüller (55h)</span>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
