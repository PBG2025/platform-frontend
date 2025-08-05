import Hero from './sections/Hero';
import About from './components/About';
import Features from './components/Features';
import Join from './components/Join';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white">
      <Hero />
      <About />
      <Features />
      <Join />
      <Support />
      <Contact />
      <Footer />
    </main>
  );
}

