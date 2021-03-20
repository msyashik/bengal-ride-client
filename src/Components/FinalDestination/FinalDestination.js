import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import fakeData from "../../MOCK_DATA.json";
import { useParams } from "react-router-dom";
import personImage from "../../images/peopleicon.png";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const FinalDestination = () => {
  const { transportType } = useParams();
  const { passData } = useContext(UserContext);
  const [passengerData, setPassengerData] = passData;
  const { from, to, person, date } = passengerData;
  const [fakeDataUse, setFakeDataUse] = useState([]);
  useEffect(() => {
    setFakeDataUse(fakeData);
  }, []);
  let currentData, currentImage;
  const searchingImage = () => {
    currentData = fakeData.find(
      (currentData) => currentData.transport === transportType
    );
    currentImage = currentData.image;
  };
  searchingImage();
  console.log(currentImage);
  //console.log(currentImage);
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="card" style={{ backgroundColor: "orange" }}>
                  <div className="card-body">
                    <h5 className="card-text">{from}</h5>
                    <h5 className="card-text" style={{ color: "white" }}>
                      To
                    </h5>
                    <h5 className="card-text">{to}</h5>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${115}</p>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${155}</p>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${225}</p>
                  </div>
                  <div className="card-body my-3 mx-2 rounded-3 shadow-lg bg-white text-dark d-flex justify-content-between align-items-center">
                    <img src={currentImage} className="w-25 h-25" alt="" />
                    <p>{transportType}</p>
                    <p>
                      <FontAwesomeIcon icon={faUserFriends} />
                      {person}
                    </p>
                    <p>${175}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <p>
              <iframe
                title="bangladesh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7496723.66068468!2d85.84616609221882!3d23.442075849009655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1616258217705!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalDestination;
