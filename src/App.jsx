import Intro from "./components/Intro";
import About from "./components/About"
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
      </Routes>
    </div>
  );
}

export default App;
