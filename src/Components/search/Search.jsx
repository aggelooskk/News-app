import React from "react";
import styles from "../search/Search.modules.css"
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search" className="search-input" />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
