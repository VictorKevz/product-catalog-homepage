import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cardVariants } from "../../variants";
import "../../css/product.css";
import products from "./productData";
import Filters from "./Filters";
import soldOut from "../../assets/images/catalog/sold-out.svg";
import noMatch from "../../assets/images/catalog/empty.svg";

function ProductList({isDark}) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredData = products.filter(({name,category})=>{
    const matchedQuery = name.toLowerCase().includes(query.toLowerCase())
    const matchedCategory = selectedCategory === "" || category.toLowerCase().includes(selectedCategory.toLowerCase())

    return matchedCategory && matchedQuery
  });

  return (
    <div id="catalog" className="product wrapper">
      <header className="product-header">
        <h2 className={`product-title ${isDark && "text-dark"}`}>Pick Your Favorites</h2>

        <Filters
          query={query}
          setQuery={setQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </header>

      <div className="product-inner container">
        {filteredData.length === 0 ? (
          <div className="no-match">
            <h4 className="no-match-text">No Matches Found!</h4>
            <img src={noMatch} alt="Hourglass Icon" className="no-match-icon" />
          </div>
        ) : (
          filteredData.map((product,i) => (
            <AnimatePresence mode="wait" key={product.id}>
            <motion.div 
            key={product.id} 
            className="product-card"
            variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          custom={i}
            >
              <div className="product-image-wrapper">
                <img
                  src={product.imgSrc}
                  alt={`A picture of ${product.name}`}
                  className="product-img"
                />
              </div>
              <article className="product-text-container">
                <h3 className={`product-name`}>{product.name}</h3>
                <p className="product-parag">{product.description}</p>
                <div className="btn-price-container">
                  <button
                    type="button"
                    className={`cta product ${
                      !product.available && "sold-out"
                    }`}
                    disabled={product.available}
                  >
                    <img
                      src={product.icon}
                      alt="Icon of a cart"
                      className="cart-icon"
                    />
                    BUY NOW
                  </button>
                  <p
                    className={`product-price ${
                      !product.available && "sold-out"
                    }`}
                  >{`$${product.price}`}</p>
                </div>
              </article>
              {!product.available && (
                <div className="sold-out-container">
                  <img
                    src={soldOut}
                    alt="Sold out Icon"
                    className="sold-out-icon"
                  />
                </div>
              )}
            </motion.div>
            </AnimatePresence>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
