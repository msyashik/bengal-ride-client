import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import ShowPersonalOrders from "../ShowPersonalOrders/ShowPersonalOrders";
import "./orders.css";

const Orders = () => {
  const [ordersCollection, setOrdersCollection] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const { email, displayName } = loggedIn;

  useEffect(() => {
    fetch("https://hidden-garden-85563.herokuapp.com/orders?email=" + email, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrdersCollection(data);
        setSpinner(false);
      });
  }, []);
  let total = 0;
  ordersCollection.map(
    (order) => (total = total + parseInt(order.buyProduct.productPrice))
  );
  return (
    <div>
      <Header></Header>
      {spinner && (
        <div className="text-center">
          <div
            className="spinner-grow text-warning mt-5"
            role="status"
            style={{ width: "2rem", height: "2rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="container">
        <h4>Showing Orders Of: {email}</h4>
        <div className="">
          <ul className=" list-group ulStyle">
            <li className=" list-group-item liStyleShow bg-primary">
              <span className="listStyleShow nameStyleShow fw-bold">Name</span>
              <span className="listStyleShow ms-2 fw-bold weight-style">
                Weight(lb)
              </span>
              <span className="listStyleShow ms-2 fw-bold">Quantity</span>
              <span className="listStyleShow ms-2 fw-bold order-show">
                OrderTime
              </span>
              <span className="listStyleShow ms-2 text-center fw-bold">
                Price($)
              </span>
            </li>
            {ordersCollection.map((event) => (
              <ShowPersonalOrders
                key={event._id}
                event={event}
              ></ShowPersonalOrders>
            ))}
            <li className=" list-group-item liStyleShow bg-warning">
              <span className="listStyleShow nameStyleShow fw-bold">Total</span>
              <span className="listStyleShow ms-2 fw-bold weight-style"></span>
              <span className="listStyleShow ms-2 fw-bold">
                {ordersCollection.length}
              </span>
              <span className="listStyleShow ms-2 fw-bold order-show"></span>
              <span className="listStyleShow ms-2 text-center fw-bold">
                {total}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Orders;
