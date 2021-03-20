import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const location = {
  lat: 23.810331,
  lng: 90.412521,
};

function GoogleMapRoute() {
  const [directionResponse, setDirectionResponse] = useState("");
  return (
    <LoadScript googleMapsApiKey="AIzaSyBxJiLp_TXynXad_AJX4vCN6s_xKOtmhGQ">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <DirectionsService
          // required
          options={{
            destination: "Dhaka",
            origin: "Sylhet",
            travelMode: "DRIVING",
          }}
          // required
          callback={(res) => {
            if (res !== null) {
              setDirectionResponse(res);
            }
          }}
        />
        {console.log("directions", directionResponse)}
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
