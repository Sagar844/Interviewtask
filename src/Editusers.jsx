import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const inisial = {
  id: 1,
  name: "",
  address: "",
  mobilenumber: "",
  email: "",
};

export const Editusers = ({ edites, updatetable }) => {
  const [tabledata, setdata] = useState(inisial);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (edites) {
      updatetable(tabledata);
      console.log(tabledata);
    }
    setdata(inisial);
  };



  const apicall = (e) => {
    e.preventDefault();
    axios.post(
      "https://custom-resource-349421-default-rtdb.firebaseio.com/myfirstproject.json",
      {
        id: tabledata.id,
        name: tabledata.name,
        address: tabledata.address,
        mobilenumber: tabledata.mobilenumber,
        email: tabledata.email,
      }
    );
  };

  const handlechenge = (e) => {
    console.log(e.target.name, e.target.value);
    setdata({ ...tabledata, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (edites) {
      setdata(edites);
    }
  }, [edites]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handlechenge}
          value={tabledata.name}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handlechenge}
          value={tabledata.email}
        />
        <input
          type="text"
          placeholder="address"
          name="address"
          onChange={handlechenge}
          value={tabledata.address}
        />
        <input
          type="text"
          placeholder="mobilenumber"
          name="mobilenumber"
          onChange={handlechenge}
          value={tabledata.mobilenumber}
        />

        <button onClick={handlesubmit} className="bg-green-500 ">
          {edites ? "Edit" : "add"}
        </button>
        <button onClick={apicall} className="bg-green-500 ">
          updatedatabase
        </button>
      </form>
    </div>
  );
};
