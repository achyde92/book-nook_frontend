import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((book) => (
          <li key={book.id}>
              <h3>{book.title}</h3>
            <Link to={`/book-details/${book.id}`}>
            </Link>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;



