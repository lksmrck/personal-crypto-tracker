const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

const routes = require("./routes/api");

const MONGODB_URI = "doplnit adresu databaze";

//Pripojeni na databazi
mongoose
  .connect(MONGODB_URI)
  .then(() => app.listen(PORT, console.log(`Server is starting at ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.connection.on("connected", () => {
  //kdyz se connection provede, napise:
  console.log("Mongoose is connected!");
});

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS policy handler
app.use(cors());

// /api jako starting route
app.use("/api", routes);
