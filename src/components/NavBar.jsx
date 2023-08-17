import "../styles/components/navbar.scss";
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav id="navbar" className={click ? "navbar active" : "navbar"}>
      <div className="navbar__container">
        <div className="navbar__container__title">
          <Link to="/" className="navbar__container__title__text neon-text">CAIO OLIVEIRA</Link>
        </div>
        <ul className={click ? "navbar__container__list active" : "navbar__container__list"}>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '100ms' }}>
            <Link to="/about" className="navbar__container__list__item__link neon-text" onClick={handleClick}>About</Link>
          </li>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '200ms' }}>
            <Link to="/skills" className="navbar__container__list__item__link neon-text" onClick={handleClick}>Skills</Link>
          </li>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '300ms' }}>
            <Link to="/projects" className="navbar__container__list__item__link neon-text" onClick={handleClick}>Projects</Link>
          </li>
          <li className={click ? "navbar__container__list__item active" : "navbar__container__list__item"} style={{ '--transition-delay': '400ms' }}>
            <Link to="/experiences" className="navbar__container__list__item__link neon-text" onClick={handleClick}>Experiences</Link>
          </li>
        </ul>
        <IconButton className="navbar__container__icon" onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
