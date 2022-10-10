import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"; //šifrování passwords v databazi
import jwt from "jsonwebtoken";

import User from "../models/userSchema.js";

const router = express.Router();

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong password." });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    ); //"test" je secred word, které bych měl vědět jen já, mít někde uchované

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const registerUser = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email }); //CHeck, že user s daným e-mailem ještě neexistuje
    if (existingUser) {
      return res.status(404).json({ message: "User already exists." });
    }

    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12); //12 = level of difficulty to hash the password. Usually used 12

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
