import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const location = {
  lat: 23.810331,
  lng: 90.412521,
};

const onLoad = (marker) => {
  //console.log("marker: ", marker);
};

function LocationGoogleMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBxJiLp_TXynXad_AJX4vCN6s_xKOtmhGQ">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        <Marker onLoad={onLoad} position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(LocationGoogleMap);
