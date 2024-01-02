import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ onNewReview }) => {
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      review
    };
    try {
      const response = await axios.post(
        "https://localhost:5001/api/reviews/",
        formData
      );
      if (response.status === 201) {
        onNewReview(); 
      }
    } catch (error) {
      console.warn("Error Submitting new review: ");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex item">
      <h4>Add Review </h4>
      <div className="p-2">
        <p label="Review" value={review} onChange={setReview} />
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary" type="submit">
            Add Review
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
