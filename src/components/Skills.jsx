import "../styles/components/skills.scss";
import MoonPhasesParallax from "./MoonPhasesParallax";
import Loading from "./Loading";
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import ReactIcon from '/img/skill_icons/react.svg';
import AngularIcon from '/img/skill_icons/angular.svg';
import HtmlIcon from '/img/skill_icons/html5.svg';
import CssIcon from '/img/skill_icons/css.svg';
import JsIcon from '/img/skill_icons/javascript.svg';
import TsIcon from '/img/skill_icons/typescript.svg';
import SassIcon from '/img/skill_icons/sass.svg';
import CIcon from '/img/skill_icons/c.svg';
import CppIcon from '/img/skill_icons/c++.svg';
import GithubIcon from '/img/skill_icons/github.svg';
import BitbucketIcon from '/img/skill_icons/bitbucket.svg';
import VscodeIcon from '/img/skill_icons/visual-studio-code.svg';
import JiraIcon from '/img/skill_icons/jira.svg';
import FigmaIcon from '/img/skill_icons/figma.svg';

const Skills = () => {
  const { lang } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  const frameworks = [
    { image: ReactIcon, enText: 'Most of my personal projects including this portfolio were made on React', ptText: 'A maioria dos meus projetos pessoais, incluindo este portfólio, foram feitos em React', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: AngularIcon, enText: 'I have worked with Angular for over than a year at Cilia Technology', ptText: 'Trabalhei com Angular por mais de um ano na Cilia Technology', class: 'skills__content__list-container__item__icon default-size-icon' }
];

const basics = [
    { image: HtmlIcon, enText: 'All around intermediate through some advanced concepts', ptText: 'Conceitos intermediários até alguns avançados', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: CssIcon, enText: 'I keep up with the more recent updates on selectors, effects, properties, also use the BEM Css methodology', ptText: 'Acompanho as atualizações mais recentes em seletores, efeitos, propriedades, também uso a metodologia de Css BEM', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: JsIcon, enText: 'With the Academind Web Dev 2022 course I have built an entire E-commerce with vanilla javascript on the front-end', ptText: 'Com o curso de Desenvolvimento Web da Academind 2022, construí um E-commerce completo com JavaScript puro no front-end', class: 'skills__content__list-container__item__icon default-size-icon' }
];

const addons = [
    { image: TsIcon, enText: 'Works very well with Angular specially with Java Back-end, have worked with ir for a year as well', ptText: 'Funciona muito bem com Angular, especialmente com Java no back-end; trabalhei com ele por um ano também', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: SassIcon, enText: 'Also used Scss at work, it makes great use of the BEM Css methodology for organizing stylization', ptText: 'Também usei Scss no trabalho, ele faz ótimo uso da metodologia de Css BEM para organizar a estilização', class: 'skills__content__list-container__item__icon default-size-icon' }
];

const logic = [
    { image: CIcon, enText: 'Have used C on my degree in Computer Engineering as I learned programming logic at university', ptText: 'Usei C no meu curso de Engenharia da Computação, onde aprendi lógica de programação na universidade', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: CppIcon, enText: 'Have extensively used C++ on my Computer engineering Degree, also made my final paper on C++', ptText: 'Usei extensivamente C++ no meu curso de Engenharia da Computação, também fiz meu trabalho final em C++', class: 'skills__content__list-container__item__icon default-size-icon' }
];

const repo = [
    { image: GithubIcon, enText: 'Always used github for my personal projects, I have a descent knowledge on how to use it', ptText: 'Sempre usei o GitHub para meus projetos pessoais, tenho um bom conhecimento sobre como usá-lo', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: BitbucketIcon, enText: 'Have used Bitbucket at my current job, with the company best practises', ptText: 'Usei o Bitbucket no meu emprego atual, seguindo as melhores práticas da empresa', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: JiraIcon, enText: 'Great tool for managing projects, tasks, Scrum and so on', ptText: 'Ótima ferramenta para gerenciar projetos, tarefas, Scrum, entre outros', class: 'skills__content__list-container__item__icon default-size-icon' }
];

const tools = [
    { image: VscodeIcon, enText: 'My preferred IDE for developing front-end with its extensions', ptText: 'Minha IDE preferida para desenvolvimento front-end com suas extensões', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: FigmaIcon, enText: 'I have made a few designs myself, also currently studying the tool and UI/UX', ptText: 'Fiz alguns designs por conta própria, também estou estudando a ferramenta e UI/UX atualmente', class: 'skills__content__list-container__item__icon default-size-icon' }
];

  const listOfLists = [...frameworks, ...basics, ...addons, ...logic, ...repo, ...tools];
  
  return (
    <section id="skills" className="skills">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonPhasesParallax/>
      <div className="skills__content">
        <div className="skills__content__list-container">
            {listOfLists.map((item, itemIndex) => (
              <div 
                key={itemIndex}
                className="skills__content__list-container__item"
              >
                <img src={item.image} className={item.class} />
                <div className="skills__content__list-container__item__text">
                  {lang === "en" && <span className="small-neon-text">{item.enText}</span>}
                  {lang === "pt" && <span className="small-neon-text">{item.ptText}</span>}
                </div> 
              </div>
            ))}
        </div>
      </div>
    </section>
  );  
};

export default Skills;
