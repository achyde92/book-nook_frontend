import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import axios from "axios";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = "yourAPIKey";
      const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

      const response = await axios.get(apiUrl + searchTerm, {
        params: {
          key: apiKey,
        },
      });

      const books = response.data.items.map((book) => ({
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.join(", ") || "Unknown Author",
      }));

      setSearchResults(books);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    handleSearch();
  };

  return (
    <div>
      <SearchBar
        onSearchChange={handleSearchChange}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <ResultsList searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
