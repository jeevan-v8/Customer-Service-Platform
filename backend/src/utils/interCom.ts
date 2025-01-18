import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const intercomAPI = axios.create({
  baseURL: "https://api.intercom.io",
  headers: {
    Authorization: `Bearer ${process.env.INTERCOM_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default intercomAPI;