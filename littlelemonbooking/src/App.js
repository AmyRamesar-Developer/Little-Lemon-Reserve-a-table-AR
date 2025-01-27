import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Footer from './Footer.js'
import Header from './Header.js'
import Hero from "./Hero.js"
import SpecialSection from "./SpecialSection.js"

function App() {
  return (
    <ChakraProvider>
      <main>
      <Header />
      <Hero />
      <SpecialSection />
      <Footer />
    </main>
    </ChakraProvider>
  );
}

export default App;
