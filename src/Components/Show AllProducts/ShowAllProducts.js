import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./ShowAllProducts.css";

const ShowAllProducts = (props) => {
  const history = useHistory();
  const {
    email,
    _id,
    productImage,
    productName,
    productPrice,
    productWeight,
  } = props.event;
  //console.log(event);
  const handleBuyNow = (id) => {
    history.push(`/order/${id}`);
  };
  return (
    <div className="col">
      <div className="card">
        <img src={productImage} className="card-img-top car-img" alt="..." />
        <div className="card-body card-body-padding">
          <h5 className="card-title text-center">{productName}</h5>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h4>${productPrice}</h4>
          <button className="btn btn-primary" onClick={() => handleBuyNow(_id)}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowAllProducts;
