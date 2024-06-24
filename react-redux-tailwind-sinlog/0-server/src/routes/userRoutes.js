import express from "express";
const router = express.Router();
import User from "../models/users.js";
import bcrypt from "bcryptjs";

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
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;