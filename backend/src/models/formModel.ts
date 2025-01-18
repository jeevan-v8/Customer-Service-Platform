import mongoose, { Document, Schema } from 'mongoose';
// import  IUser  from './userModel';  // Import the IUser interface

interface IFormData extends Document {
  category: string;
  comment: string;
  email: string;  // Use email to link the form data to the user
}

const formDataSchema: Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      ref: 'User',  // Reference to the User model (email links to the user)
    },
  },
  { timestamps: true }
);

const FormData = mongoose.model<IFormData>('FormData', formDataSchema);

export { FormData, IFormData };