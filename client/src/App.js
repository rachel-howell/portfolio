import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <About id="about" />
        <Skills />
        <Portfolio />
        <WorkExperience />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
