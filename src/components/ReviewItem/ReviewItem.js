import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { name, img, price, shipping, quantity } = props.product;

  return (
    <div className="review-item">
      <h1>Review Item {name}</h1>
    </div>
  );
};

export default ReviewItem;
