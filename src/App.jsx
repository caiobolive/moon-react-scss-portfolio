import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'

import "./styles/components/app.scss";

function App() {
  return (
    <div id="portfolio">
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
