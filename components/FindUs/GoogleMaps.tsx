import React from "react";
import { GoogleMap } from "@react-google-maps/api";
import { LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

interface Props {
  coords: GoogleLatLng;
}

type GoogleLatLng = google.maps.LatLng;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMaps: React.FC<Props> = ({ coords }) => {
  const apiKey: string = process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY || "";

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords as GoogleLatLng}
        zoom={17}
      >
        <Marker position={coords as GoogleLatLng} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
