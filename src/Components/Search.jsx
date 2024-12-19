import React from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div>
        <input type="text" placeholder="Search" className="search-input" />
        <Button variant="outline-light" className="search-button">
          <FaSearch />
        </Button>
      </div>
    </>
  );
};

export default Search;
