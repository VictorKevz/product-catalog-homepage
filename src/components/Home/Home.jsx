import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroIMG from "../../assets/images/hero-img.png";
import "../../css/home.css";

function Home({isDark}) {
  return (
    <section id="home" className="home wrapper">
      <AnimatePresence mode="wait">
      <motion.div 
      className="home-inner container"
      
      
      >
        <motion.div 
        className="home-image-wrapper"
        initial={{opacity:0,x:"50%"}}
        animate={{opacity:1,x:0}}
        transition={{type:"tween", duration:0.8, ease:"easeIn", delay:0.5}}
        >
          <img
            src={heroIMG}
            alt="A picture of headphones"
            className="home-img"
          />
        </motion.div>
        <motion.div 
        className="text-container"
        initial={{opacity:0,x:"-50%"}}
        animate={{opacity:1,x:0}}
        transition={{type:"tween", duration:0.8, ease:"easeIn", delay:0.5}}
        >
          <h1 className={`home-title ${isDark && "text-dark"}`}>
            Cutting-Edge{" "}
            <span className="title-light">Devices and Accessories </span>
          </h1>
          <p className="home-parag">
            Explore our curated selection of top smartphones, cutting-edge
            computers, and essential accessories. Whether you’re upgrading your
            tech or searching for the perfect gift, we have everything you need
            to stay ahead.
          </p>
          <div className="cta-container">
            <a href="#nav" className="cta buy">
              Buy Now
            </a>
            <a href="#home" className={`cta all ${isDark && "text-dark"} `}>
              Shop All
            </a>
          </div>
        </motion.div>
      </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default Home;
