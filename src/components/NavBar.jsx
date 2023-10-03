import "../styles/components/navbar.scss";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AstronautProfile from '/img/arts/astronaut_profile.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [lang, setUrlSegment] = useState('');

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const segments = currentUrl.split('/');    
    const desiredSegment = segments[1] || 'en';    
    setUrlSegment(desiredSegment);
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [animationIn, setIsAnimationIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimationIn(false);
    }, 2000); 
  }, []);

  return (
    <nav id="navbar" className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__title link">
          <Link to="/en/intro" className={animationIn ? "navbar__container__title__link neon-flicker-in" : "navbar__container__title__link neon-text"} onClick={handleClick}>
            <img src={AstronautProfile} className="navbar__container__title__link__img" draggable={false}/>
          </Link>
        </div>
        <ul className={click ? "navbar__container__list active" : "navbar__container__list"}>
          <li className={click ? "navbar__container__list__item link active" : "navbar__container__list__item link"} style={{ '--transition-delay': '100ms' }}>
            {lang === "en" && <Link to="/en/intro" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Home</Link>}
            {lang === "pt" && <Link to="/pt/intro" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Início</Link>}
          </li>
          <li className={click ? "navbar__container__list__item link active" : "navbar__container__list__item link"} style={{ '--transition-delay': '200ms' }}>
            {lang === "en" && <Link to="/en/about" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>About</Link>}
            {lang === "pt" && <Link to="/pt/about" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Sobre</Link>}
          </li>
          <li className={click ? "navbar__container__list__item link active" : "navbar__container__list__item link"} style={{ '--transition-delay': '300ms' }}>
            {lang === "en" && <Link to="/en/skills" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Skills</Link>}
            {lang === "pt" && <Link to="/pt/skills" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Habilidades</Link>}
          </li>
          <li className={click ? "navbar__container__list__item link active" : "navbar__container__list__item link"} style={{ '--transition-delay': '400ms' }}>
            {lang === "en" && <Link to="/en/projects" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Projects</Link>}
            {lang === "pt" && <Link to="/pt/projects" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Projetos</Link>}
          </li>
          <li className={click ? "navbar__container__list__item link active" : "navbar__container__list__item link"} style={{ '--transition-delay': '500ms' }}>
            {lang === "en" && <Link to="/en/experiences" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Experiences</Link>}
            {lang === "pt" && <Link to="/pt/experiences" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Experiências</Link>}
          </li>
        </ul>
        <IconButton className={animationIn ? "navbar__container__icon neon-flicker-in" : "navbar__container__icon neon-text"} onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
