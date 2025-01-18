import axios, { AxiosInstance, AxiosResponse } from "axios";

// Create an Axios instance with the base URL
const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/auth/",
});

// Define the function to handle Google authentication
export const googleAuth = (code: string): Promise<AxiosResponse> => {
    return api.get(`/google?code=${code}`);
};