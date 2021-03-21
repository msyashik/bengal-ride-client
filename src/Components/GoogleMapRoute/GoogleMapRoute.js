import React, { useContext, useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { UserContext } from "../../App";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const location = {
  lat: 23.810331,
  lng: 90.412521,
};

function GoogleMapRoute() {
  const { passData } = useContext(UserContext);
  const [passengerData, setPassengerData] = passData;
  const { from, to } = passengerData;
  const [directionResponse, setDirectionResponse] = useState("");
  return (
    <LoadScript googleMapsApiKey="AIzaSyBxJiLp_TXynXad_AJX4vCN6s_xKOtmhGQ">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <DirectionsService
          // required
          options={{
            destination: to,
            origin: from,
            travelMode: "DRIVING",
          }}
          // required
          callback={(res) => {
            if (res !== null) {
              setDirectionResponse(res);
            }
          }}
        />
        {directionResponse && (
          <DirectionsRenderer
            // required
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapRoute);
