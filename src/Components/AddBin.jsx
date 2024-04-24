import React, { useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
const AddBin = ({ handleAdd, loadBin, setLoadBin }) => {
  const [binId, setBinId] = useState("");
  const [location, setLocation] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    const binData = {
      bin_id: binId,
      location,
      lat,
      lon,
      manufacturer,
    };
    axios
      .post("bin/add", binData)
      .then((res) => {
        setResponse("New Bin Successfully added");
        setLoadBin(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        setResponse(err.response.data.message);
        setLoadBin(err);
      })
      .finally((response) => {
        setLoading(false);
        setBinId("");
        setLat("");
        setLon("");
        setManufacturer("");
        setLocation("");
      });
  };
  return (
    <div className="absolute flex flex-col justify-center items-center h-screen w-screen z-10">
      <span className="animate-pulse text-red-400 text-lg bg-yellow-400 p-1 rounded-md m-1">
        {response}
      </span>
      <form className="text-black-400 text-xl flex flex-col bg-yellow-300 opacity-90 min-h-1/2 w-3/4 p-3 rounded-xl">
        <label htmlFor="bin_id">Add bin Id:</label>
        <input
          type="text"
          id="bin_id"
          placeholder="bin_0001"
          className="rounded-md p-2 bg-orange-200"
          value={binId}
          onChange={(e) => setBinId(e.target.value)}
          required
        />
        <label htmlFor="bin_id">Bin location:</label>
        <input
          type="text"
          id="bin_id"
          placeholder="Jorhat Engineering College Cse Department"
          className="rounded-md p-2 bg-orange-200"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
         <label htmlFor="lat">Latitude :</label>
        <input
          type="text"
          id="lat"
          placeholder="00.0000"
          className="rounded-md p-2 bg-orange-200"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
        <label htmlFor="lon">Longitude :</label>
        <input
          type="text"
          id="lon"
          placeholder="00.0000"
          className="rounded-md p-2 bg-orange-200"
          value={lon}
          onChange={(e) => setLon(e.target.value)}
          required
        />
       
        <label htmlFor="bin_id">Bin Manufacturer:</label>
        <input
          type="text"
          placeholder="M/S lila enterprise"
          className="rounded-md p-2 bg-orange-200"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        />
        <div className="w-100 text-center">
          <button
            type="submit"
            className={
              loading
                ? "animate-pulse w-[5rem] text-sm text-center rounded-md bg-green-300 p-2 m-2"
                : "w-[5rem] text-sm text-center rounded-md bg-green-300 p-2 m-2"
            }
            disabled={loading}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </div>
      </form>
      <button
        className="text-red-800 text-md text-bold rounded-md bg-red-400 p-1 m-1"
        onClick={handleAdd}
        disabled={loading}
      >
        Close
      </button>
    </div>
  );
};

export default AddBin;
