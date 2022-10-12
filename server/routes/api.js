import express from "express";

import {
  getHoldings,
  createHolding,
  updateHolding,
  deleteHolding,
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
router.patch("/holdings/:name", updateHolding);
router.post("/holdings/delete", deleteHolding);

//Transactions routes
router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);

//Auth routes
router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;
