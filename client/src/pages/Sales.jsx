import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import salesPic from "../pictures/sales.jpg";

export const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getReports();
  }, []);

  const getReports = () => {
    axios
      .get(`http://localhost:5000/sales`)
      .then((res) => {
        setSales(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(sales);

  return (
    <div className="pl-80 pr-28 bg-gradient-to-r from-indigo-900 via-violet-500 to-indigo-400 h-screen">
      <div className="border-b-2 pb-4">
        <h1 className="text-center text-white text-5xl font-bold">
          Sales Record
        </h1>
      </div>
      <div className="flex gap-7">
        <table className="border-collapse border-b border-x-transparent border-slate-400  bg-white mt-8 w-3/5 ">
          <thead>
            <tr className="text-violet-600">
              <th className="border-b border-slate-300 p-2 w-1/2">Month</th>
              <th className="border-b border-slate-300 w-1/6 p-2">Sales</th>
              <th className="border-b border-slate-300  w-1/2 p-2">Year</th>
            </tr>
          </thead>
          <tbody>
            {sales &&
              sales.map((sale, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b border-slate-300 odd:bg-zinc-300 "
                  >
                    <td className="p-1 text-center font-medium text-lg">
                      {sale.Month}
                    </td>
                    <td className="p-1 text-center font-medium text-lg">
                      {sale.Sales.toLocaleString()}
                    </td>

                    <td className="p-1 text-center font-medium text-lg">
                      {sale._id.Year}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="mt-8">
          <img src={salesPic} alt="" className="h-80 w-80" />
        </div>
      </div>
    </div>
  );
};
