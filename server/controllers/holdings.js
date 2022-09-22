import express from "express";
import mongoose from "mongoose";

import Holding from "../models/holdingSchema.js";

const router = express.Router();

export const getHoldings = async (req, res) => {
  try {
    const holdings = await Holding.find();

    res.status(200).json(holdings); //nastaví reponse status na 200
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getHolding = async (req, res) => {
  const { name } = req.params;

  try {
    const oneHolding = await Holding.findById(id); // UPRAVIT !!! na Find a najit podle jmena

    res.status(200).json(oneHolding);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createHolding = async (req, res) => {
  const { id, name, price, amount, date } = req.body;
  console.log(req.body);

  const newHolding = new Holding({
    id,
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
  /* const { name } = req.params; */ //NEVIM NA CO JE???
  const { id, name, price, amount, date } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`An error occured during the update.`);

  const updatedHolding = { name, price, amount, date, _id: id };

  await Holding.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedHolding);
};

/* module.exports = router; */
export default router;
