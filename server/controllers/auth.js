import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../models/userSchema.js";

const router = express.Router();
dotenv.config();

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

    const secretWord = process.env.JWT_SECRET;

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Wrong password." });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      secretWord,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const registerUser = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log(req.body);

  try {
    //Verify if users email does not already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ message: "User already exists." });
    }

    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Passwords don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

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
