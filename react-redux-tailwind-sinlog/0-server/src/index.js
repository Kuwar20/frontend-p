import express from 'express';
const app = express();

import { connectDB } from './utils/connDB.js';
connectDB();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})