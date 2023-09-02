import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import NavBar from "./components/NavBar";
import AnimatedCursor from "react-animated-cursor"
import {Routes, Route} from 'react-router-dom'

import "./styles/components/app.scss";

function App() {
  return (
    <div id="portfolio">
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      innerStyle={{
        filter: 'drop-shadow(0 0 5px variables.$primary-color-100)'
      }}
      clickables={[
        {
          target: '.link',
          options: {
            innerSize: 80,
            outerSize: 80,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        },
        {
          target: '.lat-scroll',
          options: {
            innerSize: 80,
            outerSize: 80,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
    />
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/experiences" element={<Experiences />} />         
      </Routes>
    </div>
  );
}

export default App;
