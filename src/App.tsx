import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
