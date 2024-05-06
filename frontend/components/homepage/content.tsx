
'use client'
import Hero from "./Hero";
// import styles from ".../styles/Home.module.css";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Statistics from "./Statistics";
import Footer from "./Footer";
import CTA from "./CTA";
import Product from "./Carousel"

export const Content = () => {
  return (

    <div>
      <Hero />
      <Product />
      <Features />
      {/* <Statistics /> */}
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );

};
export default Content;