import React from "react";
import Header from './Header.js'
import Hero from "./Hero.js"
import SpecialSection from "./SpecialSection.js"
import Testimonals from "./Testimonals.js"
import About from "./About.js"
import Footer from './Footer.js'
import './App.css'

function App() {
  return (
      <main className="grid-container">
      <Header />
      <Hero />
      <SpecialSection />
      <Testimonals />
      <About />
      <Footer />
    </main>
  );
}

export default App;
