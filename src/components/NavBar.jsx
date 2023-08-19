import "../styles/components/navbar.scss";
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
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
        <div className="navbar__container__title">
          <Link to="/" className={animationIn ? "navbar__container__title__text neon-flicker-in" : "navbar__container__title__text neon-text"} onClick={handleClick}>CAIO OLIVEIRA</Link>
        </div>
        <ul className={click ? "navbar__container__list active" : "navbar__container__list"}>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '100ms' }}>
            <Link to="/about" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>About</Link>
          </li>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '200ms' }}>
            <Link to="/skills" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Skills</Link>
          </li>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '300ms' }}>
            <Link to="/projects" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Projects</Link>
          </li>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '400ms' }}>
            <Link to="/experiences" className={animationIn ? "navbar__container__list__item__link neon-flicker-in" : "navbar__container__list__item__link neon-pulse"} onClick={handleClick}>Experiences</Link>
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
