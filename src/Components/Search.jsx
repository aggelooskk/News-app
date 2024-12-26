import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <input type="text" placeholder="Search" />
        <button variant="outline-light" size="sm" className="search-button">
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
