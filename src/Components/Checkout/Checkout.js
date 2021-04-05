import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const Checkout = () => {
  const [buyProduct, setBuyProduct] = useState({});
  const { logInUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = logInUser;
  const { email, displayName } = loggedIn;
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://hidden-garden-85563.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setBuyProduct(data));
  }, [id]);
  const { productName, productPrice, productWeight } = buyProduct;
  const handleCheckOut = () => {
    const order = {
      buyProduct: buyProduct,
      orderTime: new Date().toDateString("dd/mm/yyyy"),
      email: email,
      displayName: displayName,
    };
    fetch("https://hidden-garden-85563.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Header></Header>
      <div className="container mt-5">
        <div className="shadow py-5 px-3" style={{ borderRadius: "2rem" }}>
          <table className="table table-striped table-hover table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Weight(lb)</th>
                <th scope="col">Price($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productName}</td>
                <td>1</td>
                <td>{productWeight}</td>
                <td>{productPrice}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="table-warning">
                <th>Total</th>
                <td></td>
                <td></td>
                <th>{productPrice}</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-4" style={{ float: "right" }}>
          <button
            className="btn btn-primary px-4 py-2"
            onClick={() => handleCheckOut()}
          >
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
