import {Example} from './components/motion/Menu/index.js';
import Cards from './components/motion/Cards';
import Banner from './components/Banner';
import AboutMe from "./components/AboutMe/index.js";
import Music from "./components/Music.js";
import MyWork from './components/MyWork/index.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Example/>
      <Banner/>
      <div id='about-me'>
        <AboutMe/>
      </div>
      <div  id="my-music">
        <Music/>
      </div>
      <div id='my-tools'>
        <Cards/>
      </div>
      <div id="my-work">
        <MyWork/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
