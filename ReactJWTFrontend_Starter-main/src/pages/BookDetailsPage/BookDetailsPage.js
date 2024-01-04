import React from 'react';
import ReviewForm from './ReviewForm'; 
import ReviewList from './ReviewList';

const BookDetailsPage = ({ match }) => {
  const bookId = match.params.bookId; 

  return (
    <div>
      <h2>Book Details</h2>
      <p>Book ID: {bookId}</p>

      {/* Your BookDetails component can go here if you have one */}

      <ReviewForm bookId={bookId} />

      <h3>Reviews</h3>
      <ReviewList bookId={bookId} />
    </div>
  );
};

export default BookDetailsPage;
