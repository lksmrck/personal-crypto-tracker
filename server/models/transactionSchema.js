import mongoose from "mongoose";

//Schema
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  transactionType: /* "buy" | "sell"; */ String,
  userId: String,
  name: String,
  price: Number,
  amount: Number,
  date: String,
});

//Model
const Transaction = mongoose.model("transaction", transactionSchema);

/* module.exports = transaction; */

export default Transaction;
