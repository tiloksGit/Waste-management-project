import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const RemoveBin = ({ setLoadBin }) => {
  const [id, setId] = useState("");
  const { bin_id } = useParams();

  console.log("bin id: ", bin_id);
  const handleDelete = async (e) => {
    e.preventDefault();
    if (bin_id === id) {
      axios
        .delete(`/bin/delete/${bin_id}`)
        .then((response) => {
          if (response.data.success === true) {
            alert(`${bin_id} successfully deleted`);
            setLoadBin(bin_id);
            window.location.replace("http://localhost:5174");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("bin removal failed try again");
        });
    }
  };
  return (
    <div className="p-2 fixed w-full h-full bg-blue-200 z-10 flex flex-col justify-center items-center">
      <form className="md:w-2/4">
        <label htmlFor="remove" className="text-[#444]">
          Enter the text <span className="italic">{bin_id}</span> to delete this
          bin permanently
        </label>
        <input
          type="text"
          id="remove"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="rounded w-full h-6 italic p-2 bg-pink-400"
        />
        <button
          onClick={(e) => handleDelete(e)}
          className="rounded p-2 text-center bg-green-300 m-2"
        >
          Delete
        </button>
      </form>
      <Link to="/">
        <div className="rounded p-2 text-center bg-blue-300 m-2 h-[2rem]">
          Cancel
        </div>
      </Link>
    </div>
  );
};

export default RemoveBin;
