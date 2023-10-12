import { useState } from "react";
import ReviewList from "./ReviewList";
import SortingOptions from "./SortingOptions";
import ReviewForm from "./ReviewForm";

const App = () => {
  const [userReviews, setUserReviews] = useState([
    {
      id: 1,
      userEmail: "example1@gmail.com",
      reviewerName: "Alice",
      reviewText: "Lorem ipsum",
      reviewTime: "14:30",
      reviewDate: "2023-03-15",
      reviewRating: 4,
    },
    {
      id: 2,
      userEmail: "example2@gmail.com",
      reviewerName: "Bob",
      reviewText: "Lorem ipsum",
      reviewTime: "15:45",
      reviewDate: "2023-04-20",
      reviewRating: 3,
    },
    {
      id: 3,
      userEmail: "example3@gmail.com",
      reviewerName: "Charlie",
      reviewText: "Lorem ipsum",
      reviewTime: "16:20",
      reviewDate: "2023-05-10",
      reviewRating: 5,
    },
  ]);

  const averageUserRating = userReviews.length > 0
    ? (userReviews.reduce((total, review) => total + review.reviewRating, 0) / userReviews.length).toFixed(1)
    : 0;

  const addNewReview = (newReviewData) => {
    const newReviewId = userReviews.length + 1;
    const reviewToAdd = { id: newReviewId, ...newReviewData };
    setUserReviews([...userReviews, reviewToAdd]);
  };

  return (
    <div className="app">
      <h1>User Reviews</h1>
      <div className="review-controls">
        <div className="average-rating">
          Average Rating: {averageUserRating} {generateStarRating(averageUserRating)}
        </div>
        <div className="sort-options">
          <span>Sort Reviews By:</span>
          <SortingOptions userReviews={userReviews} onSortChange={(sortedReviews) => setUserReviews(sortedReviews)} />
        </div>
      </div>
      <div className="review-list">
        <ReviewList userReviews={userReviews} />
      </div>
      <div className="review-form">
        <ReviewForm onSubmit={addNewReview} />
      </div>
    </div>
  );
};

const generateStarRating = (rating) => {
  const fullStars = "★".repeat(Math.floor(rating));
  const emptyStars = "☆".repeat(5 - Math.floor(rating));
  return (
    <span className="star-rating">
      {fullStars}{emptyStars}
    </span>
  );
};

export default App;
