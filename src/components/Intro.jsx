import "../styles/components/intro.scss";
import MoonSpaceParallax from "./MoonSpaceParallax";
import Loading from "./Loading";
import LinkedinImg from "/img/socials/linkedin.svg";
import React, { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import AwsIcon from '/img/skill_icons/aws.svg';

const Intro = () => {
  const { lang } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  const [animationIn, setIsAnimationIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationIn(false);
    }, 2000); 
  }, []);  

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [dropdownAnimationIn, setIsDropdownAnimationIn] = useState(true);

  const [currentLang, setCurrentLang] = useState(lang);

  useEffect(() => {
    if (currentLang !== lang) {
      window.location.reload();
    }
  }, [lang]);

  return (
    <section id="intro" className="intro">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonSpaceParallax/>
      <div className="intro__content">
        <div className="intro__content__title">
          {lang === "en" && <h6 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Welcome to</h6>}
          {lang === "en" && <h1 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Caio Oliveira's</h1>}
          {lang === "en" && <h4 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Front-End</h4>}
          {lang === "en" && <h6 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Portfolio</h6>}
          {lang === "en" && <span className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>
            Powered By 
            <img src={AwsIcon} className={animationIn ? "intro__content__title__text__icon neon-flicker-in" : "intro__content__title__text__icon neon-text"} />
          </span>}
          {lang === "pt" && <h6 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Bem vindo ao</h6>}
          {lang === "pt" && <h6 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Portfólio do</h6>}
          {lang === "pt" && <h1 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Caio Oliveira</h1>}
          {lang === "pt" && <h4 className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>Front-End</h4>}
          {lang === "pt" && <span className={animationIn ? "intro__content__title__text neon-flicker-in" : "intro__content__title__text neon-text"}>
            Proporcionado Por 
            <img src={AwsIcon} className={animationIn ? "intro__content__title__text__icon neon-flicker-in" : "intro__content__title__text__icon neon-text"} />
          </span>}
        </div>
        <div className="intro__content__footer">
          <div className="intro__content__footer__info">
            <div className="intro__content__footer__info__socials">
              <a className="intro__content__footer__info__socials__link" href="https://www.linkedin.com/in/caiobolive/" target="_blank">
                <img
                  id="linkedin"
                  className="intro__content__footer__info__socials__link__image"
                  src={LinkedinImg}
                />
              </a>
            </div>
            <div className="intro__content__footer__info__language dropdown neon-text" onClick={handleClick}>
              {lang === "en" && <span className="intro__content__footer__info__language__title dropdown-title">
                Language
              </span>}
              {lang === "pt" && <span className="intro__content__footer__info__language__title dropdown-title">
                Idioma
              </span>}
              <LanguageIcon fontSize="large" />
              <ul className={click ? "dropdown_menu dropdown_menu-animation show-items" : "dropdown_menu dropdown_menu-animation"}>
                {lang === "en" && <li className="dropdown_item-4" style={{ '--transition-delay': '200ms' }}>
                  <Link to="/pt/intro" className="neon-text" onClick={() => window.location.reload()}>Portuguese (Pt-Br)</Link>
                </li>}
                {lang === "en" && <li className="dropdown_item-5" style={{ '--transition-delay': '100ms' }}>
                  <Link to="/en/intro" className="neon-text" onClick={() => window.location.reload()}>English (En-Us)</Link>
                </li>}
                {lang === "pt" && <li className="dropdown_item-4" style={{ '--transition-delay': '200ms' }}>
                  <Link to="/pt/intro" className="neon-text" onClick={() => window.location.reload()}>Português (Pt-Br)</Link>
                </li>}
                {lang === "pt" && <li className="dropdown_item-5" style={{ '--transition-delay': '100ms' }}>
                  <Link to="/en/intro" className="neon-text" onClick={() => window.location.reload()}>Inglês (En-Us)</Link>
                </li>}
              </ul>
            </div>
          </div>
          {lang === "en" && <Link to="/en/about" className="intro__content__footer__see-more">
            <h6 className={animationIn ? "intro__content__footer__see-more__text neon-flicker-in" : "intro__content__footer__see-more__text"}>See More &gt; &gt;</h6>
          </Link>}
          {lang === "pt" && <Link to="/pt/about" className="intro__content__footer__see-more">
            <h6 className={animationIn ? "intro__content__footer__see-more__text neon-flicker-in" : "intro__content__footer__see-more__text"}>Ver Mais &gt; &gt;</h6>
          </Link>}
        </div>
      </div>
    </section>
  );
};

export default Intro;
