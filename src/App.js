import "./App.css";
import Stats from "./Components/Stats";
import Fotter from "./Components/Fotter";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Stats />
      <Contact />
      <Fotter />
    </div>
  );
}

export default App;
