import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import data from "../../MOCK_DATA.json";
import TransportDetail from "../TransportDetail/TransportDetail";
import { Container } from "react-bootstrap";

const Home = () => {
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    setTransports(data);
  }, []);
  return (
    <div className="bgImg">
      <Header></Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            {transports.length > 0 &&
              transports.map((transport) => (
                <TransportDetail
                  key={transport.transport}
                  transport={transport}
                ></TransportDetail>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
