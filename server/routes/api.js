/* const express = require("express"); */
import express from "express";

import {
  getHolding,
  getHoldings,
  createHolding,
  updateHolding,
} from "../controllers/holdings.js";

import {
  addTransaction,
  getTransactions,
} from "../controllers/transactions.js";

import { loginUser, registerUser } from "../controllers/auth.js";

const router = express.Router();

//Holdings routes
router.get("/holdings", getHoldings);
router.post("/holdings", createHolding);
router.get("/holdings/:name", getHolding);
router.patch("/holdings/:name", updateHolding);

//Transactions routes
router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);

//Auth routes
router.post("/login", loginUser); // !!! POST protože chceme poslat data do backendu (from form to backend)
router.post("/register", registerUser);

export default router;
