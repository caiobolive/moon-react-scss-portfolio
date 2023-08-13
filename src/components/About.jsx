import "../styles/components/about.scss";
import moonWindowClip from "/video/moon_window_clip.mp4"

const About = () => {
  return (
    <section id="about" className="about">
      <video id="moon-window-background" src={moonWindowClip} autoPlay muted loop/>
      <div className="about__title">
        <h2>About</h2>
      </div>
    </section>
  );
};

export default About;
