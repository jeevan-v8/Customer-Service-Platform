import mongoose, { Document, Schema } from 'mongoose';

// Define interface for the User model to ensure type safety
interface IUser extends Document {
    name: string;
    email: string;
    image?: string;
}

// Define the User schema
const UserSchema: Schema<IUser> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // To ensure email is unique
    },
    image: {
        type: String,
        default: '', // Optional, if no image is provided
    },
});

// Create and export the model
const UserModel = mongoose.model<IUser>('login', UserSchema);

export default UserModel;