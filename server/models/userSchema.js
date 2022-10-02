import mongoose from "mongoose";

//Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  id: { type: String },
});

//Model
var User = mongoose.model("user", userSchema);

/* module.exports = holding; */

export default User;
