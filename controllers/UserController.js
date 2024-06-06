require('dotenv').config();

const User = require('../models/User.Models')
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


const JWT_SECRET = process.env.JWT_SECRET;


exports.registerUser =  async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if(!username || !email || !password || password.length < 4){
      return res.status(500).json({
        error: 'Fields cannot be empty and password must be atleast 4 characters'
      })
    }

    const existingUserByEmail = await User.findOne({ email });
    const existingUserByUsername = await User.findOne({ username });

    if (existingUserByEmail || existingUserByUsername) {
      return res.status(400).json({ 
        error: 'User already exists or kindly input a unique name or email' });
    }

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');

    const newUser = new User({
      username,
      password: hashedPassword,
      email
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User created', user: savedUser });
    } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const loginPasswordHash = crypto.createHash('sha256').update(password).digest('hex');
        if (!loginPasswordHash) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET);

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
