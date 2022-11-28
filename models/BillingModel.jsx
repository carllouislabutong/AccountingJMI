const mongoose = require("mongoose");

const Schemma = mongoose.Schema;
const billingSchema = new Schemma({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Billing = mongoose.model("Billing", billingSchema);
module.exports = Billing;
