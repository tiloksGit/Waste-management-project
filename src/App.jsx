import { React, useState } from "react";

import dustbinImg from "./assets/garbage-bin.svg";
const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [binOccupancy, setbinOccupancy] = useState(7);
  const handleAdd = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      {showForm ? (
        <div className="absolute flex flex-col justify-center items-center h-screen w-screen z-10">
          <form className="text-black-400 text-xl flex flex-col bg-gray-300 opacity-80 h-1/2 w-1/2 p-4 rounded-xl">
            <label htmlFor="bin_id">Add bin Id:</label>
            <input
              type="text"
              placeholder="bin_0001"
              className="rounded-md p-2"
              required
            />
            <label htmlFor="bin_id">Bin location:</label>
            <input
              type="text"
              placeholder="Jorhat Engineering College Cse Department"
              className="rounded-md p-2"
              required
            />
            <label htmlFor="bin_id">Bin Manufacturer:</label>
            <input
              type="text"
              placeholder="M/S lila enterprise"
              className="rounded-md p-2"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <button
            className="text-red-800 text-xl text-bold"
            onClick={handleAdd}
          >
            close
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
            <div className="flex relative">
              <img src={dustbinImg} className="h-90" />
              <p className="flex text-white font-bold items-center ml-[-2rem] mr-2">
                {binOccupancy}%
              </p>
              <div className="h-[12rem] w-5 mt-20 bg-yellow-400"></div>
              <span
                className={`h-1 w-5 absolute bg-red-500 bottom-0 right-0 translate-y-[-1rem]`}
              ></span>
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
