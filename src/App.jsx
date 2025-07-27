import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  About,
  Asked,
  Contact,
  Footer,
  Home,
  Navbar,
  Portfolio,
  Pricing,
  Services,
  Team,
  WhyUs,
} from "./Section/index";
const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyUs />
      <Portfolio />
      <Team />
      <Pricing />
      <Asked />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
