import React from "react";

const ShowPersonalOrders = (props) => {
  const { productPrice, productName, productWeight } = props.event.buyProduct;
  const { orderTime } = props.event;
  return (
    <div>
      <li className=" list-group-item liStyleShow bg-light">
        <span className="listStyleShow nameStyleShow">{productName}</span>
        <span className="listStyleShow ms-2 weight-style">{productWeight}</span>
        <span className="listStyleShow ms-2">1</span>
        <span className="listStyleShow ms-2 order-show">{orderTime}</span>
        <span className="listStyleShow ms-2 text-center">{productPrice}</span>
      </li>
    </div>
  );
};

export default ShowPersonalOrders;
