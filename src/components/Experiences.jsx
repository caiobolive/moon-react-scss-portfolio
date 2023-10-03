import "../styles/components/experiences.scss";
import MoonZoomOutParallax from "./MoonZoomOutParallax";
import Loading from "./Loading";
import PucGoiasImg from "/img/experiences/puc_goias.svg";
import WebDevImg from "/img/experiences/web_dev_academind.jpg";
import CiliaImg from "/img/experiences/cilia_tech.jpg";
import AngularImg from "/img/experiences/angular_academind.jpg";
import ReactImg from "/img/experiences/react_academind.jpg";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Experiences = () => {
  const { lang } = useParams();

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
        <div className="experiences__content__section">          
          <img 
            id="puc-goias" 
            className="experiences__content__section__image" 
            src={PucGoiasImg}
          />
          {lang === "en" && <h4 className="experiences__content__section__text neon-text">Bachelor Degree at Computer Engineering 2017-2022</h4>}
          {lang === "pt" && <h4 className="experiences__content__section__text neon-text">Bacharelado em Engenharia de Computação 2017-2022</h4>}
        </div>
        <div className="experiences__content__section">          
          <img 
            id="web-dev-academind" 
            className="experiences__content__section__image" 
            src={WebDevImg}
          />
          <h4 className="experiences__content__section__text neon-text">100 Days Of Code - 2023 Web Development Bootcamp on Academind - by Maximilian Schwarzmüller</h4>
        </div>
        <div className="experiences__content__section">          
          <img 
            id="cilia-tech" 
            className="experiences__content__section__image" 
            src={CiliaImg}
          />
          {lang === "en" && <h4 className="experiences__content__section__text neon-text">2022-Current Working at Cilia Technology as a Front End Web Developer</h4>}
          {lang === "pt" && <h4 className="experiences__content__section__text neon-text">2022-Atual trabalhando na Cilia Tecnologia como Desenvolvedor Front End</h4>}
        </div>
        <div className="experiences__content__section">          
          <img 
            id="angular-academind" 
            className="experiences__content__section__image" 
            src={AngularImg}
          />
          <h4 className="experiences__content__section__text neon-text">Angular - The Complete Guide (2023 Edition) on Academind - by Maximilian Schwarzmüller</h4>
        </div>
        <div className="experiences__content__section">          
          <img 
            id="react-academind" 
            className="experiences__content__section__image" 
            src={ReactImg}
          />
          <h4 className="experiences__content__section__text neon-text">React - The Complete Guide 2023 (incl. React Router & Redux) on Academind - by Maximilian Schwarzmüller</h4>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
