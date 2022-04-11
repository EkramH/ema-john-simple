import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;
  const { name, img, price, shipping, quantity } = product;

  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-wrapper">
        <div className="review-item-details">
          <h3 className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h3>
          <p>
            Price: <span className="orange-color">${price}</span>
          </p>
          <p>
            <small>
              Shipping: <span className="orange-color">${shipping}</span>
            </small>
          </p>
        </div>
        <div className="review-delete">
          <button
            onClick={() => handleRemoveProduct(product)}
            className="delete-btn"
          >
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
