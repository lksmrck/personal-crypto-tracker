import express from "express";
import mongoose from "mongoose";

import Holding from "../models/holdingSchema.js";

const router = express.Router();

//params z get requestu
export const getHoldings = async (req, res) => {
  const userId = req.query.userId;

  try {
    const holdings = await Holding.find({ userId });

    res.status(200).json(holdings); //nastaví reponse status na 200
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// NEPOUZITO
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
  const { name } = req.params; //NEVIM NA CO JE???
  /* const { id, name, price, amount, date } = req.body; */
  const updatedHolding = req.body;

  /*   if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`An error occured during the update.`); */

  /*  const updatedHolding = { _id: id, name, price, amount, date }; */
  console.log(updatedHolding);

  /* await Holding.findByIdAndUpdate(id, updatedPost, { new: true }); */
  await Holding.replaceOne({ name: name }, updatedHolding); //pak dát jen NAME místo NAME:NAME

  res.json(updatedHolding);
};

/* module.exports = router; */
export default router;
