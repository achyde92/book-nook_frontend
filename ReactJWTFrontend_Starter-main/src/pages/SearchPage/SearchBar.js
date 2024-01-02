import React, { useState } from "react";

const SearchBar = ({ onSearchChange, setSearchTerm, searchTerm }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearchChange(searchTerm);
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
            {console.log("Input value changed:", e.target.value);
            setSearchTerm(e.target.value);
          }}
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
