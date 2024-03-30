import { React, useState } from "react";

import dustbinImg from "./assets/garbage-bin.svg";
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [binOccupancy, setbinOccupancy] = useState(20);
  const handleAdd = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      {showForm ? (
        <div className="absolute flex flex-col justify-center items-center h-screen w-screen z-10">
          <form className="text-black-400 text-xl flex flex-col bg-yellow-300 opacity-90 min-h-1/2 w-3/4 p-3 rounded-xl">
            <label htmlFor="bin_id">Add bin Id:</label>
            <input
              type="text"
              id="bin_id"
              placeholder="bin_0001"
              className="rounded-md p-2 bg-orange-200"
              required
            />
            <label htmlFor="bin_id">Bin location:</label>
            <input
              type="text"
              id="bin_id"
              placeholder="Jorhat Engineering College Cse Department"
              className="rounded-md p-2 bg-orange-200"
              required
            />
            <label htmlFor="lon">Longitude :</label>
            <input
              type="text"
              id="lon"
              placeholder="00.0000"
              className="rounded-md p-2 bg-orange-200"
              required
            />
            <label htmlFor="lat">Latitude :</label>
            <input
              type="text"
              id="lat"
              placeholder="00.0000"
              className="rounded-md p-2 bg-orange-200"
              required
            />
            <label htmlFor="bin_id">Bin Manufacturer:</label>
            <input
              type="text"
              placeholder="M/S lila enterprise"
              className="rounded-md p-2 bg-orange-200"
              required
            />
            <div className="w-100 text-center">
              <button
                type="submit"
                className="w-[5rem] text-sm text-center rounded-md bg-green-300 p-2 m-2"
              >
                Submit
              </button>
            </div>
          </form>
          <button
            className="text-red-800 text-md text-bold rounded-md bg-red-400 p-1 m-1"
            onClick={handleAdd}
          >
            Close
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col  items-center bg-[url('/src/assets/LilaBg.jpg')] h-screen p-2">
        <div className="text-4xl text-green-400 text-center">
          Lila's Waste management Project
        </div>
        <div className="flex">
          <div className="flex flex-col m-3 items-center justify-center">
            <div className="flex">
              <img src={dustbinImg} className="h-90" />
              <p className="flex text-white font-bold items-center w-8 ml-[-2.2rem] mr-3">
                {binOccupancy}%
              </p>
              <div className="h-[12rem] w-5 mt-20 bg-yellow-400 relative">
                <span
                  className={`w-5 absolute bg-red-500 bottom-0 right-0`}
                  style={{ height: `${binOccupancy}%` }}
                ></span>
              </div>
            </div>
            <span className="text-green-400">bin Id: bin_0001</span>
            <span className="text-green-400">last updated: 20:20:20:20</span>
            <span className="text-green-400">location: googleMapsLink</span>
          </div>
        </div>

        <div className="text-xl text-red-400">
          Add new smart bin at your location{" "}
          <button
            className="font-bold text-4xl inline mt-2"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
