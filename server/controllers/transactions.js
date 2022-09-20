import express from "express";
import mongoose from "mongoose";

import Transaction from "../models/transactionSchema.js";

const router = express.Router();

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json(transactions); //nastaví reponse status na 200
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addTransaction = async (req, res) => {
  const { transactionType, id, name, price, amount, date } = req.body;
  console.log(req.body);

  const newTransaction = new Transaction({
    transactionType,
    id,
    name,
    price,
    amount,
    date,
  });

  try {
    await newTransaction.save();

    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
