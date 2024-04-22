import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";
import React from "react";
const center = { lat: 26.746, lng: 94.2485 };

const MapsTest = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  return (
    <div className="h-screen w-full  top-20 absolute  flex justify-center items-center">
      <div className="h-[60rem] w-[60rem] z-10 ">
        <Link to="/">
          <div className="text-red-400 text-bold text-lg relative top-0">X</div>
        </Link>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "80%", height: "80%" }}
          options={{
            zoomControl: false,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapsTest;
