import React, { useState, useEffect } from 'react';

const Book = ({ bookId, activeIndex, setActiveIndex, index }) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT/${bookId}`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleActive = () => {
    setActiveIndex(index);
  };

  const btnClass = isFavorite ? 'btn btn-success' : 'btn btn-secondary';
  const activeClass = index === activeIndex ? 'active-movie' : '';

  return (
    <div onClick={handleActive} className={`book-item ${activeClass}`}>
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