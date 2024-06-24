import express from 'express';
const app = express();
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

import { connectDB } from './utils/connDB.js';
connectDB();

app.use(cors());

// connect the frontend dist (build file) here statically on backend, so that we can see the frontend on the backend without having to run the frontend separately
// one issue is that now the frontend is static so do it in last, any changes in frontend wont show up
// we are using the path module to join the current directory with the dist folder, if you are unpdating frontend you have to build it again
// or just comment out the below code

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../../dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.use(express.json());
app.use('/api/user',userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})