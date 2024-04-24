import React, { useEffect, useState } from "react";
import dustbinImg from "../assets/garbage-bin.svg";
import axios from "axios";
import { Link } from "react-router-dom";
const Bins = ({ loadBin, socket }) => {
  const [bins, setBins] = useState([]);
  useEffect(() => {
    console.log("loading bin...");
    axios
      .get(`/bin/all`)
      .then((response) => {
        console.log(response.data.data);
        if (response.status == 200 && response.data.data.length >= 1) {
          setBins(response.data.data);
        }
      })
      .finally(() => {});
  }, [loadBin]);
  socket.on("fill", (data) => {
    const updatedBins = bins.map((bin) => {
      if (bin.bin_id === data.bin_id) {
        // Return a new object with the updated fill value
        return { ...bin, fill: data.fill };
      }
      // Return the original object if it's not the one being updated
      return bin;
    });
    setBins(updatedBins);
  });
  const handleMaps = () => {
    location.href =
      "https://www.google.com/maps/search/?api=1&query=47.5951518%2C-122.3316393";
  };
  return (
    <>
      <div className="flex flex-wrap md:mx-96">
        {bins?.length > 0 ? (
          bins.map((bin) => (
            <div
              className="flex relative flex-col m-3 items-center justify-center p-3"
              key={bin.bin_id}
            >
              <Link to={`/${bin.bin_id}`}>
                <div className="h-[1rem] w-[1rem] rounded-full bg-red-400 absolute top-0 right-0 cursor-pointer"></div>
              </Link>
              <div className="flex ">
                <img src={dustbinImg} className="h-90" />
                <p className="flex text-white font-bold items-center w-8 ml-[-2.2rem] mr-3">
                  {bin.fill}%
                </p>
                <div className="h-[12rem] w-5 mt-20 bg-yellow-400 relative">
                  <span
                    className={`w-5 absolute bg-red-500 bottom-0 right-0`}
                    style={{ height: `${bin.fill}%`, transition: "height 1s" }}
                  ></span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-green-400 p-1 rounded-md">
                  <span className="rounded  pr-16">Bin Id :</span>
                  {bin.bin_id}
                </span>
                <span className="text-green-400 p-1 rounded-md">
                  <span className="rounded  pr-1">Last Updated : </span>
                  {bin.updatedAt}
                </span>
                <span className="text-green-400 p-1 rounded-md cursor-pointer">
                  <span className="rounded  pr-10">Location :</span>
                  <span
                    className="text-blue-400 underline"
                    onClick={() => {
                      let newTab = window.open(
                        `https://www.google.com/maps/search/?api=1&query=${bin.longitude}%2C${bin.latitude}`
                      );
                      // (location.href = `https://www.google.com/maps/search/?api=1&query=${bin.latitude}%2C${bin.longitude}`)
                    }}
                  >
                    {bin.location}
                  </span>
                </span>
              </div>
            </div>
          ))
        ) : (
          <span className="flex w-screen items-center justify-center text-lg text-red-400 p-6">
            No bins registered yet
          </span>
        )}
      </div>
    </>
  );
};

export default Bins;
