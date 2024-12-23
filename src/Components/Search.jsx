import React from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <input type="text" placeholder="Search" />
        <Button variant="outline-light" size="sm" className="search-button">
          <FaSearch />
        </Button>
      </div>
    </>
  );
};

export default Search;
