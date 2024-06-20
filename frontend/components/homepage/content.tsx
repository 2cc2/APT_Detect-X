
'use client'
import Hero from "./Hero";
// import styles from ".../styles/Home.module.css";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Statistics from "./Statistics";
import Footer from "./Footer";
import CTA from "./CTA";
import Product from "./Carousel"
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

export const Content = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <TweenOne animation={{ opacity: 1, duration: 1000 }} style={{ opacity: 0 }}>
        <Hero />
      </TweenOne>
      <TweenOne animation={{ opacity: 1, duration: 2500 }} style={{ opacity: 0 }}>
        <Product />
      </TweenOne>
      <TweenOne animation={{ opacity: 1, duration: 4000 }} style={{ opacity: 0 }}>
        <Features />
      </TweenOne>
      {/* <Statistics /> */}
      <TweenOne animation={{ opacity: 1, duration: 5500 }} style={{ opacity: 0 }}>
        <Testimonials />
      </TweenOne>
      <TweenOne animation={{ opacity: 1, duration: 7000 }} style={{ opacity: 0 }}>
        <CTA />
      </TweenOne>
      {/* <Footer /> */}
    </div>
  );
};

export default Content;