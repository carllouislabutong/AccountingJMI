import React from "react";
import { useState } from "react";
import axios from "axios";

export const Expense = () => {
  const [deduction, setDeduction] = useState("");
  const [amount, setAmount] = useState(0);
  const [process, setProcess] = useState("");

  const submmitExpense = async () => {
    await axios.post(`http://localhost:5000/addExpense`, {
      deduction: deduction,
      amount: amount,
      process: process,
    });
  };

  return (
    <div className="px-80 bg-gradient-to-r from-indigo-900 via-violet-500 to-indigo-400 h-screen">
      <div className="text-center border-b-2 pb-3">
        <h1 className="font-extrabold text-3xl text-white">Add Expense</h1>
      </div>
      <div className=" bg-white rounded-md shadow-lg mt-8 p-5 ">
        <div className="flex gap-10">
          <div className=" leading-8 ">
            <label
              for="name"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Deduction Type:
            </label>
            <input
              type="text"
              id="deduction"
              placeholder="Deduction Type"
              required
              className="input  border border-solid border-gray-300"
              onChange={(e) => {
                setDeduction(e.target.value);
              }}
            />

            <label
              for="amount"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              required
              className=" input  border border-solid border-gray-300"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />

            <label
              for="process"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Process by:
            </label>
            <input
              type="text"
              id="process"
              placeholder="Process by"
              required
              className="input  border border-solid border-gray-300 "
              onChange={(e) => {
                setProcess(e.target.value);
              }}
            />
          </div>
          {/* <div>
            <img src={img1} alt="" className="h-48 w-48" />
          </div> */}
        </div>
        <button
          type="submit"
          className="bg-violet-600 mt-4 rounded-md shadow-lg p-4 hover: text-white hover:bg-violet-700"
          onClick={submmitExpense}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};
