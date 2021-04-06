import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import { Container } from "react-bootstrap";
import ShowAllProducts from "../Show AllProducts/ShowAllProducts";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://hidden-garden-85563.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setSpinner(false);
      });
  }, []);
  return (
    <div>
      <Header></Header>
      {spinner && (
        <div className="text-center">
          <h2>Please Wait!</h2>
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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {events.length > 0 &&
            events.map((event) => (
              <ShowAllProducts key={event._id} event={event}></ShowAllProducts>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
