import "../styles/components/skills.scss";
import MoonPhasesParallax from "./MoonPhasesParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';
import ReactIcon from '../../public/img/skill_icons/react.svg';
import AngularIcon from '../../public/img/skill_icons/angular.svg';
import HtmlIcon from '../../public/img/skill_icons/html5.svg';
import CssIcon from '../../public/img/skill_icons/css.svg';
import JsIcon from '../../public/img/skill_icons/javascript.svg';
import TsIcon from '../../public/img/skill_icons/typescript.svg';
import SassIcon from '../../public/img/skill_icons/sass.svg';
import CIcon from '../../public/img/skill_icons/c.svg';
import CppIcon from '../../public/img/skill_icons/c++.svg';
import GithubIcon from '../../public/img/skill_icons/github.svg';
import BitbucketIcon from '../../public/img/skill_icons/bitbucket.svg';
import VscodeIcon from '../../public/img/skill_icons/visual-studio-code.svg';
import JiraIcon from '../../public/img/skill_icons/jira.svg';
import FigmaIcon from '../../public/img/skill_icons/figma.svg';

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
      <MoonPhasesParallax/>
      <div className="skills__content">
        <div className="skills__content__title">
          <h2>Skills</h2>
        </div>
        <div className="skills__content__list-container">
          <ul className="skills__content__list-container__list">
            <li className="skills__content__list-container__list__item">
              <img src={ReactIcon} className="big-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={AngularIcon} className="big-wide-size-icon" /> 
            </li>
          </ul>
          <ul className="skills__content__list-container__list">
            <li className="skills__content__list-container__list__item">
              <img src={HtmlIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={CssIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={JsIcon} className="default-size-icon" /> 
            </li>
          </ul>
          <ul className="skills__content__list-container__list">
            <li className="skills__content__list-container__list__item">
              <img src={TsIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={SassIcon} className="default-size-icon" /> 
            </li>
          </ul>
          <ul className="skills__content__list-container__list">
            <li className="skills__content__list-container__list__item">
              <img src={CIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={CppIcon} className="default-size-icon" /> 
            </li>
          </ul>
          <ul className="skills__content__list-container__list">
            <li className="skills__content__list-container__list__item">
              <img src={GithubIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={BitbucketIcon} className="default-size-icon" /> 
            </li>
          </ul>
          <ul className="skills__content__list-container__list">
            <li className="skills__content__list-container__list__item">
              <img src={VscodeIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={JiraIcon} className="default-size-icon" /> 
            </li>
            <li className="skills__content__list-container__list__item">
              <img src={FigmaIcon} className="default-size-icon" /> 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );  
};

export default Skills;
