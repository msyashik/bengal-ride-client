import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import fakeData from "../../MOCK_DATA.json";
import { useParams } from "react-router-dom";

const FinalDestination = () => {
  const { transportName } = useParams();
  const { passData } = useContext(UserContext);
  const [passengerData, setPassengerData] = passData;
  const { from, to, person, date } = passengerData;
  const [fakeDataUse, setFakeDataUse] = useState([]);
  useEffect(() => {
    setFakeDataUse(fakeData);
  }, []);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-12" style={{ backgroundColor: "orange" }}>
                <div>{from}</div>
                <div>{to}</div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-sm-12 mt-2"
                style={{ backgroundColor: "orange" }}
              >
                <div className="">Car</div>
              </div>
            </div>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div>
    </div>
  );
};

export default FinalDestination;
