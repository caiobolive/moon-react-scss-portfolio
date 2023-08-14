import "../styles/components/navbar.scss";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header id="navbar" className="navbar">
      <div className="navbar__title">
        <h1 className="navbar__title__text neon-text">CAIO OLIVEIRA</h1>
      </div>
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link to="/" className="navbar__list__item__link">Intro</Link>
        </li>
        <li className="navbar__list__item">
          <Link to="/about" className="navbar__list__item__link">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
