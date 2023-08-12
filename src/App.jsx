import Intro from "./components/Intro";
import About from "./components/About"
import NavBar from "./components/NavBar";
import moonWindowClip from "/video/moon_window_clip.mp4"
import {Routes, Route} from 'react-router-dom'

import "./styles/components/app.scss";

function App() {
  return (
    <div id="portfolio">
      <video id="moon-window-background" src={moonWindowClip} autoPlay muted loop/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />        
      </Routes>
    </div>
  );
}

export default App;
