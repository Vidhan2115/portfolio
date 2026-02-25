import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Github from "./sections/Github";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <div className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Education />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;