import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL as string;

const connectDB = async (): Promise<void> => {
    try {
        console.log('MongoDB URL:', DB_URL); // Log the URL for confirmation
        await mongoose.connect(DB_URL);
        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error('Error while MongoDB connection:', err);
    }
};

export default connectDB;