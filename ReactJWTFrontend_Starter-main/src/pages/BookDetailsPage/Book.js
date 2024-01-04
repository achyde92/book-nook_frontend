import React, { useState, useEffect } from 'react';

const Book = ({ bookId }) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);
        const data = await response.json();
        setBookDetails(data.volumeInfo);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const btnClass = isFavorite ? 'btn btn-success' : 'btn btn-secondary';

  return (
    <div>
        <p>Book Component</p>
      {bookDetails && (
        <>
          <img src={bookDetails.imageURL} alt={`${bookDetails.title} thumbnail`} />
          <div>
            <h2>{bookDetails.title}</h2>
            <p>Authors: {bookDetails.authors?.join(', ')}</p>
            <p>Description: {bookDetails.description}</p>
          </div>
          <button className={btnClass} onClick={handleFavorite}>
            {isFavorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </>
      )}
    </div>
  );
};

export default Book;