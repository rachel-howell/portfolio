import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* <WorkExperience /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
