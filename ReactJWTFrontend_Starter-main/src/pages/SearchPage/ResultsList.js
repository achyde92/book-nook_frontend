import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResultsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const apiKey = "yourAPIKey";
      const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";

      const response = await axios.get(apiUrl, {
        params: {
          q: searchTerm,
          key: apiKey,
        },
      });
      setSearchResults(response.data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }};
      const books = response.data.books.map((book) => ({
        id: book.id,
        title: book.title,
        rating: book.rating,
        author: book.authors?.join(", ") || "Unknown Author",
      }));

      setSearchResults(books);
    catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      {/* Your JSX to display search results */}
    </div>
  );
};

export default ResultsList;
