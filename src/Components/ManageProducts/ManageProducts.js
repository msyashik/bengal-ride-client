import React, { useEffect, useState } from "react";
import ShowManageProducts from "../ShowManageProducts/ShowManageProducts";
import "./ManageProduct.css";

const ManageProducts = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div className="col-md-8 col-sm-12 manage-products-show">
      <div className="">
        <ul className=" list-group ulStyle">
          <li
            className=" list-group-item liStyle"
            style={{ backgroundColor: "tomato" }}
          >
            <span className="listStyle nameStyle fw-bold">Name</span>
            <span className="listStyle ms-2 fw-bold">Weight(lb)</span>
            <span className="listStyle ms-2 text-center fw-bold">Price($)</span>
            <span className="listStyle ms-2 fw-bold">Action</span>
          </li>
          {events.map((event) => (
            <ShowManageProducts
              key={event._id}
              event={event}
            ></ShowManageProducts>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageProducts;
