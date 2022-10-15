import express from "express";
import mongoose from "mongoose";

import Holding from "../models/holdingSchema.js";

const router = express.Router();

//Params z get requestu
export const getHoldings = async (req, res) => {
  const userId = req.query.userId;

  try {
    const holdings = await Holding.find({ userId });

    res.status(200).json(holdings); //nastaví reponse status na 200
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHolding = async (req, res) => {
  const { userId, name, price, amount, date } = req.body;
  console.log(req.body);

  const newHolding = new Holding({
    userId,
    name,
    price,
    amount,
    date,
  });

  try {
    await newHolding.save();

    res.status(201).json(newHolding);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateHolding = async (req, res) => {
  const { name } = req.params;

  const updatedHolding = req.body;

  console.log("updated holding:" + updatedHolding);

  await Holding.replaceOne({ name }, updatedHolding);

  res.json(updatedHolding);
};

export const deleteHolding = async (req, res) => {
  const itemToDelete = req.body;

  await Holding.remove({ name: itemToDelete.itemName });

  res.json(itemToDelete);
};

export default router;
