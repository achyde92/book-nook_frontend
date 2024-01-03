import React from "react";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((book) => (
          <li key={book.id}>
            <h3>{book.volumeInfo?.title || 'Unknown Title'}</h3>
            <Link to={`/book-details/${book.id}`}>
              {book.volumeInfo?.title || 'Unknown Title'}
            </Link>
            <p>
              Author: {book.volumeInfo?.authors?.join(', ') || 'Unknown Author'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;




