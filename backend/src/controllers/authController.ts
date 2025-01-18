import UserModel from '../models/userModel'; // Corrected the import path
import { oauth2Client } from '../utils/googleConfig'; // Corrected the import path
import axios from 'axios';
import jwt from 'jsonwebtoken';

const googleLogin = async (req: any, res: any): Promise<void> => {
    try {
        const { code } = req.query; // Destructuring the code from query parameters

        // Get tokens using the authorization code
        const googleRes = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(googleRes.tokens);

        // Fetch user information from Google
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);
        const { email, name, picture } = userRes.data;

        // Check if the user already exists
        let user = await UserModel.findOne({ email });
        if (!user) {
            // Create new user if they don't exist
            user = await UserModel.create({
                name,
                email,
                image: picture,
            });
        }

        // Generate a JWT token for the authenticated user
        const { _id } = user;
        const token = jwt.sign({ _id, email }, process.env.JWT_SECRET as string, {
            expiresIn: process.env.JWT_TIMEOUT, // JWT timeout from env
        });

        // Send response with token and user data
        return res.status(200).json({
            message: 'Success',
            token,
            user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};

export default googleLogin;