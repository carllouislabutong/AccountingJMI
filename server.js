const express = require("express");
const mongoose = require("mongoose");
const BillingData = require("./models/BillingModel.jsx");
const ExpenseData = require("./models/ExpenseModel.jsx");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

//middleware
app.use(express.json());
//passing data through front end
app.use(cors());

/////// BILLING ROUTES////////////////////////////////////

// ////ADD BILL/////////////
app.post("/addBill", async (req, res) => {
  const name = req.body.name;
  const contact = req.body.contact;
  const description = req.body.description;
  const total = req.body.total;

  const newBill = new BillingData({
    name: name,
    contact: contact,
    description: description,
    total: total,
  });

  try {
    await newBill.save();
  } catch (err) {
    console.log(err);
  }
});

////////GET BILL////////////
app.get("/readBill", async (req, res) => {
  BillingData.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

/////// DELETE BIll///////////
app.delete("/deleteBill/:id", async (req, res) => {
  const id = req.params.id;

  await BillingData.findByIdAndRemove(id).exec();
  res.send("deleted");
});

//////Get Bill BY ID//////
app.get("/readBills/:id", async (req, res) => {
  const id = req.params.id;

  const response = await BillingData.findOne({ _id: id });
  res.json({ success: true, data: response });
});

// ////////EDITING THE BILL///////////
app.put("/editBill/:id", async (req, res) => {
  const name = req.body.name;
  const contact = req.body.contact;
  const description = req.body.description;
  const total = req.body.total;
  const id = req.params.id;

  const response = await BillingData.findByIdAndUpdate(
    { _id: id },
    { name, contact, description, total }
  );
  res.json({ success: true, data: response });
});

////////EXPENSE ROUTE/////////////

/////ADD EXPENSE
app.post("/addExpense", async (req, res) => {
  const deduction = req.body.deduction;
  const amount = req.body.amount;
  const processBy = req.body.process;
  const expense = new ExpenseData({
    deductionType: deduction,
    amount: amount,
    processBy: processBy,
  });
  try {
    await expense.save();
  } catch (err) {
    console.log(err);
  }
});

///////GET EXPENSE//////
app.get("/readExpense", async (req, res) => {
  ExpenseData.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

////DELETE EXPENSE/////
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await ExpenseData.findByIdAndRemove(id).exec();
  res.send("deleted");
});

///////GET EXPENSE BY ID//////
app.get("/readExpense/:id", async (req, res) => {
  const id = req.params.id;

  const response = await ExpenseData.findOne({ _id: id });
  res.json({ success: true, data: response });
});

//////EDIT EXPENSE//////
app.put("/editExpense/:id", async (req, res) => {
  const deductionType = req.body.deduction;
  const amount = req.body.amount;
  const processBy = req.body.process;
  const id = req.params.id;

  const response = await ExpenseData.findByIdAndUpdate(
    { _id: id },
    { deductionType, amount, processBy }
  );
  res.json({ success: true, data: response });
});
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("We are now connected to MONGODB"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`We are now connected on port ${port}`);
});
