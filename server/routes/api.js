/* const express = require("express"); */
import express from "express";

import {
  getHolding,
  getHoldings,
  createHolding,
  /* updateHolding */
} from "../controllers/holdings.js";

import {
  addTransaction,
  getTransactions,
} from "../controllers/transactions.js";

const router = express.Router();

//Holdings routes
router.get("/holdings", getHoldings);
router.post("/holdings", createHolding);
router.get("/holdings/:id", getHolding); //dodělat
/* router.patch("/:id", updateHolding); //dodělat */

//Transactions routes
router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);

/* module.exports = router; */

export default router;
