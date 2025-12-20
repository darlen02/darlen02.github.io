import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-indigo-500/30 selection:text-indigo-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
