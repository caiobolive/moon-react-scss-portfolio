import "../styles/components/about.scss";
import MoonSurfaceParallax from "./MoonSurfaceParallax";

const About = () => {
  return (
    <section id="about" className="about">
        <MoonSurfaceParallax/>
        <div className="about__content">
          <div className="about__content__title">
            <h2>About</h2>
          </div>
        </div>
      </section>
  );
};

export default About;
