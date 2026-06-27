import React from "react";
import Hero from "../components/Hero/Hero";
import Marquee from "../components/Marquee/Marquee";
import Popular from "../components/Popular/Popular";
import Offer from "../components/Offer/Offer";
import Newcollections from "../components/newCollection/Newcollections";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
function Home() {
  useScrollReveal();
  return (
    <div>
      <Hero />
      <Marquee />
      <Popular />
      <Offer />
      <Newcollections />
      <Newsletter />
      <Footer />
    </div>
  );
}
export default Home;
