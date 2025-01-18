
import express, { Request, Response } from 'express';
// import formDataRouter from './routes/formRouter';

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables
import connectDB from './models/dbConnection';
connectDB();
import authRouter from './routes/authRouter';
import formRouter from './routes/formRouter'
import cors from 'cors'; 


console.log('Database URL:', process.env.DB_URL);
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Allow all origins or specify a URL (e.g., 'http://localhost:3000')
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));
// Root route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello From Auth Server');
});

app.use('/auth',formRouter);

// Auth routes
app.use('/auth', authRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});