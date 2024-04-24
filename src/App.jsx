import { React, useState } from "react";
import axios from "axios";
import Bins from "./Components/Bins";
import AddBin from "./Components/AddBin";
import MapsTest from "./Components/MapsTest";
import { io } from "socket.io-client";
import { Routes, Route } from "react-router-dom";
import RemoveBin from "./Components/RemoveBin";
axios.defaults.baseURL = "http://13.232.54.245:8010/app";
// axios.defaults.baseURL = "http://localhost:8010/app";

const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};
const socket = io("http://13.232.54.245:8010", connectionOptions);

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [loadBin, setLoadBin] = useState("");
  const handleAdd = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Routes>
        <Route path="/locate" element={<MapsTest />} />
        <Route
          exact
          path="/:bin_id"
          element={<RemoveBin setLoadBin={setLoadBin} />}
        />
      </Routes>
      {showForm ? (
        <AddBin
          handleAdd={handleAdd}
          setLoadBin={setLoadBin}
          loadBin={loadBin}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col  items-center bg-[url('/src/assets/LilaBg.jpg')] bg-repeat-y min-h-screen p-2">
        <div className="text-4xl text-green-400 text-center">
          Smart City Waste management Project
        </div>
        <div className="animate-pulse text-xl text-red-600">
          Add new smart bin at your location
          <button
            className="font-bold text-4xl inline mt-2"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <Bins loadBin={loadBin} socket={socket} />
      </div>
    </>
  );
};

export default App;
