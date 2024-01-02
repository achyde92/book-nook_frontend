import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = ({ userId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/bookdetails/2${userId}`
        );
        setReviews(response.data);
      } catch (error) {
        console.warn("Error fetching reviews: ", error);
      }
    };

    fetchReviews();
  }, [userId]);

  return (
    <div>
      <h2>User Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.title}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
