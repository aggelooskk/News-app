import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className="flex justify-center">
        <input type="text" placeholder="Search" />
        <button className="sm-transparent bg-slate-50 hover:bg-blue-500 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default Search;
