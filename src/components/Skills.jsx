import "../styles/components/skills.scss";
import MoonPhasesParallax from "./MoonPhasesParallax";
import Loading from "./Loading";
import React, { useState, useEffect, useRef } from 'react';
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

  const frameworks = [
    { image: ReactIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon big-size-icon' },
    { image: AngularIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon big-size-icon' }
  ];

  const basics = [
    { image: HtmlIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: CssIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: JsIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' }
  ];

  const addons = [
    { image: TsIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: SassIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' }
  ];

  const logic = [
    { image: CIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: CppIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' }
  ];

  const repo = [
    { image: GithubIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: BitbucketIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: JiraIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' }
  ];

  const tools = [
    { image: VscodeIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' },
    { image: FigmaIcon, text: 'Text', class: 'skills__content__list-container__list__item__icon default-size-icon' }
  ];

  const listOfLists = [frameworks, basics, addons, logic, repo, tools];
  
  const [selectedIndexes, setSelectedIndexes] = useState(new Array(listOfLists.length).fill(null));

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const isOutside = listOfLists.some((items, listIndex) => {
        if (selectedIndexes[listIndex] !== null) {
          return !event.target.closest(`.my-list:nth-child(${listIndex + 1})`);
        }
        return false;
      });

      if (isOutside) {
        setSelectedIndexes(new Array(listOfLists.length).fill(null));
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [listOfLists, selectedIndexes]);

  const handleItemClick = (listIndex, itemIndex, event) => {
    event.stopPropagation();
    const newSelectedIndexes = [...selectedIndexes];
    newSelectedIndexes[listIndex] = itemIndex;
    setSelectedIndexes(newSelectedIndexes);
  };

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
          {listOfLists.map((items, listIndex) => (
          <ul 
            className="skills__content__list-container__list" 
            key={listIndex}
          >
            {items.map((item, itemIndex) => (
              <li 
                key={itemIndex}               
                onClick={(event) => handleItemClick(listIndex, itemIndex, event)}
                onTouchStart={(event) => handleItemClick(listIndex, itemIndex, event)}
                className={selectedIndexes[listIndex] !== null && selectedIndexes[listIndex] !== itemIndex ? 'skills__content__list-container__list__item hidden' : 'skills__content__list-container__list__item'}
              >
                <img src={item.image} className={item.class} />
                <div className={selectedIndexes[listIndex] === itemIndex ? 'skills__content__list-container__list__item__text visible' : 'skills__content__list-container__list__item__text'}>
                  <span className="small-neon-text">{item.text}</span>
                </div> 
              </li>
            ))}
          </ul>
          ))}
        </div>
      </div>
    </section>
  );  
};

export default Skills;
