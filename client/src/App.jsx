import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Billing } from "./pages/AddBill";
import { BillRecord } from "./pages/BillRecord";
import { Expense } from "./pages/AddExpense";
import { ExpenseRecord } from "./pages/ExpenseRecord";
import { Sheet } from "./pages/BalanceSheet";
import { EditBill } from "./EditingData/EditBill";
import { EditExpense } from "./EditingData/EditExpense";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/addBill" element={<Billing />} />
        <Route path="/billRecord" element={<BillRecord />} />
        <Route path="/addExpense" element={<Expense />} />
        <Route path="/expenseRecord" element={<ExpenseRecord />} />
        <Route path="/balance" element={<Sheet />} />
        <Route path="/editBill/:id" element={<EditBill />} />
        <Route path="/editExpense/:id" element={<EditExpense />} />
      </Routes>
    </div>
  );
}

export default App;
