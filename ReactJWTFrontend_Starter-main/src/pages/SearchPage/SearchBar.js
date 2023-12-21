import React, { useState } from "react";
import TextField from "../TextField/TextField";

const SearchBarForm = ({ onSearchChange, setSearchTerm, searchTerm }) => {

  console.log("searchbarform searchterm: ",searchTerm);

  const handleSubmit = async (e) => {
    e.preventDefault();
      onSearchChange(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Search</h4>
      <div className="p-2">
        <TextField label="Search" value={searchTerm} onChange={setSearchTerm} />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBarForm;