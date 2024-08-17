import React, { useState } from "react";
import "../../css/filter.css";
import search from "../../assets/images/catalog/search.svg";
import arrow from "../../assets/images/catalog/arrow.svg";

const Filters = ({ query, setQuery, selectedCategory, setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleKeyDown = (e, category) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleCategoryChange(category);
      e.preventDefault();
    }
  };
  return (
    <form className="form-container" onSubmit={handleSubmit} autoComplete="off">
      <fieldset className="field">
        <label htmlFor="query" className="sr-only">Search Products</label>
        <input
          type="search"
          value={query}
          onChange={handleChange}
          id="query"
          className="search-input"
          placeholder="Search for products..."
          aria-label="Search for products"
        />
        <button type="submit" className="search-btn" aria-label="Submit Search">
          <img src={search} alt="Search Icon" className="search-icon" />
        </button>
      </fieldset>
      <fieldset className="field dropdown">
        <button
          type="button"
          className="dropdown-selected"
          onClick={toggleDropdown}
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
          aria-controls="category-list"
        >
          {selectedCategory || "Choose Category"}
          <img src={arrow} alt="" className={`arrow-icon ${isDropdownOpen && "open"}`} />
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-options" role="listbox" id="category-list">
          <li
            role="option"
            aria-selected={selectedCategory === ""}
            tabIndex="0"
            onClick={() => handleCategoryChange("")}
            onKeyDown={(e) => handleKeyDown(e, "")}
          >
            All Categories
          </li>
          <li
            role="option"
            aria-selected={selectedCategory === "smartphones"}
            tabIndex="0"
            onClick={() => handleCategoryChange("smartphones")}
            onKeyDown={(e) => handleKeyDown(e, "smartphones")}
          >
            Smartphones
          </li>
          <li
            role="option"
            aria-selected={selectedCategory === "computers"}
            tabIndex="0"
            onClick={() => handleCategoryChange("computers")}
            onKeyDown={(e) => handleKeyDown(e, "computers")}
          >
            Computers
          </li>
          <li
            role="option"
            aria-selected={selectedCategory === "accessories"}
            tabIndex="0"
            onClick={() => handleCategoryChange("accessories")}
            onKeyDown={(e) => handleKeyDown(e, "accessories")}
          >
            Accessories
          </li>
        </ul>
        )}
      </fieldset>
    </form>
  );
};

export default Filters;