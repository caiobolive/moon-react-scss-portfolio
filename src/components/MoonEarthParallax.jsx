import React, { Component } from 'react';
import "../styles/components/moonearthparallax.scss";
import moonEarthBlackBackground from "/img/moon_earth_parallax/moon_earth_black_background_hd.png";
import moonEarthStarsBackground from "/img/moon_earth_parallax/moon_earth_stars_background_hd.png"
import moonEarthEarthForeground from "/img/moon_earth_parallax/moon_earth_earth_foreground_hd.png"
import moonEarthMoonForeground from "/img/moon_earth_parallax/moon_earth_moon_foreground_hd.png"
import moonEarthBackground from "/img/moon_earth_background.png"

class MoonEarthParallax extends Component {
  handleParallaxEffect  = (xValue, yValue) => {
    const parallax_el = document.querySelectorAll('.parallax');    

    parallax_el.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;

      let isOnTop = parseFloat(getComputedStyle(el).top) < window.innerHeight / 2 ? 1 : -1;

      el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px))`;
    })
  };
  
  render() {
    return (
      <div id="moon-earth-parallax" className="moon-earth-parallax">
        <img 
          id="moon-earth-stars-background" 
          className="moon-earth-parallax__stars-background parallax" 
          src={moonEarthStarsBackground}
          data-speedx="0.15"
          data-speedy="0.15"
          data-speedz="0.15"
          data-defaultz="1000"
        />      
        <img 
          id="moon-earth-earth-foreground" 
          className="moon-earth-parallax__earth-foreground parallax" 
          src={moonEarthEarthForeground}
          data-speedx="0.2"
          data-speedy="0.2"
          data-speedz="0.2"
          data-defaultz="100"
        />
        <img 
          id="moon-earth-moon-foreground" 
          className="moon-earth-parallax__moon-foreground parallax" 
          src={moonEarthMoonForeground}
          data-speedx="0.25"
          data-speedy="0.25"
          data-speedz="0.25"
          data-defaultz="560"
        />      
      </div>
    );
  }
};

export default MoonEarthParallax;