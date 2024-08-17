import React from "react";
import "../../css/category.css";
import data from "./categoryData";
import { AnimatePresence, motion } from "framer-motion";
import { categoryVariants } from "../../variants";

function Category({isDark}) {
  return (
    <div id="category" className="category wrapper">
      <h2 className={`category-title ${isDark && "text-dark"}`}>Shop by category</h2>

      <div className="category-inner container">
        {data.map((category,i) => (
          <AnimatePresence mode="wait" key={category.id}>
          <motion.div 
          key={category.id} 
          className={`category-card ${isDark && "bg-card-dark"}`}
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}          
          custom={i}
          >
            <div className="card-image-wrapper">
              <img
                src={category.imgSrc}
                alt={`A picture of ${category.title}`}
                className="card-img"
              />
            </div>
            <article className="card-text-container">
              <h3 className={`card-title ${isDark && "text-dark"}`}>{category.title}</h3>
              <p className="card-parag">{category.parag}</p>
            </article>
          </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
}

export default Category;
