import "../styles/components/skills.scss";
import MoonPhasesParallax from "./MoonPhasesParallax";
import Loading from "./Loading";
import React, { useState, useEffect, useRef } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  const frameworks = [
    { image: ReactIcon, text: 'Most of my personal projects including this portfolio were made on React', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: AngularIcon, text: 'I have worked with Angular for over than a year at Cilia Technology', class: 'skills__content__list-container__item__icon default-size-icon' }
  ];

  const basics = [
    { image: HtmlIcon, text: 'All around intermediate through some advanced concepts', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: CssIcon, text: 'I keep up with the more recent updates on selectors, effects, properties, also use the BEM Css methodology', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: JsIcon, text: 'With the Academind Web Dev 2022 course I have built an entire E-commerce with vanilla javascript on the front-end', class: 'skills__content__list-container__item__icon default-size-icon' }
  ];

  const addons = [
    { image: TsIcon, text: 'Works very well with Angular specially with Java Back-end, have worked with ir for a year as well', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: SassIcon, text: 'Also used Scss at work, it makes great use of the BEM Css methodology for organizing stylization', class: 'skills__content__list-container__item__icon default-size-icon' }
  ];

  const logic = [
    { image: CIcon, text: 'Have used C on my degree in Computer Engineering as I learned programming logic at university', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: CppIcon, text: 'Have extensively used C++ on my Computer engineering Degree, also made my final paper on C++', class: 'skills__content__list-container__item__icon default-size-icon' }
  ];

  const repo = [
    { image: GithubIcon, text: 'Always used github for my personal projects, I have a descent knowledge on how to use it', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: BitbucketIcon, text: 'Have used Bitbucket at my current job, with the company best practises', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: JiraIcon, text: 'Great tool for managing projects, tasks, Scrum and so on', class: 'skills__content__list-container__item__icon default-size-icon' }
  ];

  const tools = [
    { image: VscodeIcon, text: 'My preferred IDE for developing front-end with its extensions', class: 'skills__content__list-container__item__icon default-size-icon' },
    { image: FigmaIcon, text: 'I have made a few designs myself, also currently studying the tool and UI/UX', class: 'skills__content__list-container__item__icon default-size-icon' }
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
                  <span className="small-neon-text">{item.text}</span>
                </div> 
              </div>
            ))}
        </div>
      </div>
    </section>
  );  
};

export default Skills;
