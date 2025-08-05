import Hero from './sections/Hero';
import Vision from './components/Vision';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import About from './components/About';
import Join from './components/Join';
import Support from './components/Support';
import Traction from './components/Traction';
import BusinessModel from './components/BusinessModel';
import Market from './components/Market';
import Edge from './components/Edge';
import Roadmap from './components/Roadmap';
import Ask from './components/Ask';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white">
      <Hero />
      <About /> 
      <Vision />
      <Problem />
      <Solution />
      <Features />
      <Join />
      <Support />
      <Traction />
      <BusinessModel />
      <Market />
      <Edge />
      <Roadmap />
      <Ask />
      <Contact />
      <Footer />
    </main>
  );
}

