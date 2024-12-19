import React from "react";
import { Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="">
        <input type="text" placeholder="Search" className="" />
        <Button variant="outline-light" size="sm" className="search-button">
          <FaSearch />
        </Button>
      </div>
    </>
  );
};

export default Search;
