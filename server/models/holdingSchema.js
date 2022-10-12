import mongoose from "mongoose";

//Schema
const Schema = mongoose.Schema;

const holdingSchema = new Schema({
  userId: String,
  name: String,
  price: Number,
  amount: Number,
  date: String,
});

//Model
var Holding = mongoose.model("holding", holdingSchema);

export default Holding;
