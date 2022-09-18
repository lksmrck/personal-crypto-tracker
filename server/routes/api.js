/* const express = require("express"); */
import express from "express";

import {
  getHolding,
  getHoldings,
  createHolding,
  /* updateHolding */
} from "../controllers/holdings.js";

const router = express.Router();

//Routes
router.get("/", getHoldings);
router.post("/", createHolding);
router.get("/:id", getHolding); //dodělat
/* router.patch("/:id", updateHolding); //dodělat */

/* module.exports = router; */

export default router;
