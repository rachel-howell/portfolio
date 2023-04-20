import Image from 'next/image'
import { Inter } from 'next/font/google'
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import About from '../components/About';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

        <NavBar />
        <Hero />
        <About id="about"/>
        <Skills id="skills"/>
        <Portfolio id="portfolio"/>
        <WorkExperience id="experience"/>
        <Contact id="contact"/>
        <Footer />
    </main>
  )
}
