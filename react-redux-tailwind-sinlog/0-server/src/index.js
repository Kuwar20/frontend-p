import express from 'express';
const app = express();
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

import { connectDB } from './utils/connDB.js';
connectDB();

app.use(cors());

app.use(express.json());
app.use('/api/user',userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})