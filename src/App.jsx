import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import moonWindowClip from "/video/moon_window_clip.mp4"

import "./styles/components/app.scss";

function App() {
  return (
    <div id="portfolio">
      <video id="moon-window-background" src={moonWindowClip} autoPlay muted loop/>
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
