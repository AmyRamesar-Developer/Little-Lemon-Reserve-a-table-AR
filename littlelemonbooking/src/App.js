import React from "react";
import Footer from './Footer.js'
import Header from './Header.js'
import Hero from "./Hero.js"
import SpecialSection from "./SpecialSection.js"
import './App.css'

function App() {
  return (
      <main className="grid-container">
      <Header />
      <Hero />
      <SpecialSection />
      <Footer />
    </main>
  );
}

export default App;
