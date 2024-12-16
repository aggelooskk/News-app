import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" className="search-input" />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
