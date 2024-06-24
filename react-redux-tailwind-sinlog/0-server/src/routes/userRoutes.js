import express from "express";
const router = express.Router();
import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authenticateToken from "../middlewares/auth.js";

const JWT_SECRET= 'secret';

router.post('/signup', async (req, res) => {
    const { firstname,lastname, email, password } = req.body;
    if(!firstname || !lastname || !email || !password){
        return res.status(400).json({ message: 'All fields are required' });
    }
    if(password.length < 6){
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ firstname, lastname, email, password:hashedPassword });
        await newUser.save();
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.status(400).json({ message: 'Invalid credentials1' });
        }
        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if(!isPasswordMatch){
            return res.status(400).json({ message: 'Invalid credentials2' });
        }
        const token = jwt.sign({ email: existingUser.email}, JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/delete', authenticateToken, async (req, res) => {
    const { email } = req.body;
    if(!email){
        return res.status(400).json({ message: 'Email is required' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.status(400).json({ message: 'User not found' });
        }
        await User.deleteOne({ email });
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;