import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import NavBar from "./components/NavBar";
import {Routes, Route, Navigate} from 'react-router-dom'

import "./styles/components/app.scss";

function App() {
  return (
    <div id="portfolio">
      <NavBar />
      <Routes>
        {/* Redirect root URL to default language */}
        <Route exact path="/" element={<Navigate to="/en/intro" />} />
        <Route path="/:lang/intro" element={<Intro />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path="/:lang/skills" element={<Skills />} /> 
        <Route path="/:lang/projects" element={<Projects />} /> 
        <Route path="/:lang/experiences" element={<Experiences />} />
        {/* Redirect any other URL to default language intro page */}
        <Route path="*" element={<Navigate to="/en/intro" />} />      
      </Routes>
    </div>
  );
}

export default App;
