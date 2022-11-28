import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Billing } from "./pages/AddBill";
import { BillRecord } from "./pages/BillRecord";
import { Expense } from "./pages/AddExpense";
import { ExpenseRecord } from "./pages/ExpenseRecord";
import { Sales } from "./pages/Sales";
import { EditBill } from "./EditingData/EditBill";
import { EditExpense } from "./EditingData/EditExpense";
import { Loss } from "./pages/Loss";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/addBill" element={<Billing />} />
        <Route path="/billRecord" element={<BillRecord />} />
        <Route path="/addExpense" element={<Expense />} />
        <Route path="/expenseRecord" element={<ExpenseRecord />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/editBill/:id" element={<EditBill />} />
        <Route path="/editExpense/:id" element={<EditExpense />} />
        <Route path="/loss" element={<Loss />} />
      </Routes>
    </div>
  );
}

export default App;
