import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Category from "./components/Categories/Categories";
import ProductList from "./components/Catalog/ProductList";
import Footer from "./components/Footer/Footer";


function App() {
  const [isDark, setDark] = useState(true)
  function toggleTheme(){
    setDark(!isDark)
  }
  return (
    <main className={`outer-container ${isDark && "bg-dark"}`}>
      <div className="inner-container">
        <Navbar isDark={isDark} onChange={toggleTheme}/>
        <Home isDark={isDark}/>
        <Category isDark={isDark}/>
        <ProductList isDark={isDark}/>
        <Footer isDark={isDark}/>
      </div>
    </main>
  );
}

export default App;
