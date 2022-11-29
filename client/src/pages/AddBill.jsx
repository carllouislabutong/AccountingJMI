import React from "react";
import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import img1 from "../pictures/jmi.jpg";

export const Billing = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);

  const submitBill = async () => {
    await axios.post(`http://localhost:5000/addBill`, {
      name: name,
      contact: contact,
      description: description,
      total: total,
    });
  };

  return (
    <div className="px-80 bg-gradient-to-r from-indigo-900 via-violet-500 to-indigo-400 h-screen">
      <Helmet>
        <title>Add Billing</title>
        <meta name="addbilling" content="This is the Billing Section" />
      </Helmet>
      <div className="text-center border-b-2 pb-3">
        <h1 className="font-extrabold text-5xl text-white">Add Billing</h1>
      </div>
      <div className=" bg-white rounded-md shadow-lg mt-8 p-5">
        <div className="flex gap-10">
          <div className=" leading-8 ">
            <label
              htmlfor="name"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              className="input  border border-solid border-gray-300"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label
              htmlfor="contact"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Contact:
            </label>
            <input
              type="number"
              id="contact"
              placeholder="Contact"
              required
              className=" input  border border-solid border-gray-300"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />

            <label
              htmlfor="description"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Description:
            </label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              required
              className="input  border border-solid border-gray-300 "
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />

            <label
              htmlfor="total"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Total:
            </label>
            <input
              type="number"
              id="total"
              placeholder="Total"
              required
              className="input  border border-solid border-gray-300 "
              onChange={(e) => {
                setTotal(e.target.value);
              }}
            />
          </div>
          <div>
            <img src={img1} alt="" className="h-full w-96" />
          </div>
        </div>
        <button
          type="submit"
          onClick={submitBill}
          className="bg-violet-600 mt-4 rounded-md shadow-lg p-4 hover: text-white hover:bg-violet-700"
        >
          Add Billing
        </button>
      </div>
    </div>
  );
};
