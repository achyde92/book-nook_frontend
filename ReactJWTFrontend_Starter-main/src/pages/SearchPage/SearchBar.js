import React, { useState } from "react";

const SearchBar = ({ handleSearch, setSearchTerm, searchTerm }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Search</h4>
      <div className="p-2">
        <input
          type="text"
          label="Search"
          value={searchTerm}
          onChange={(e) => 
            setSearchTerm(e.target.value)
          }
        />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
