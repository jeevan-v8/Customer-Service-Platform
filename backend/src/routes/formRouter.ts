// import express, { Router, Request, Response } from 'express';
// // import the form model 
// import { FormData } from '../models/formModel';

// const router: Router = express.Router();

// // POST route to save form data
// router.post('/services', async (req , res) => {
//     try{
//         const data = await FormData.create(req.body);
//         res.status(200).json(data);
//     }catch(err){
//         console.log('Failed due to ',err);
//         res.status(500).json({message : 'server error'})
//     }
// })


// router.get('/services', async (req, res) => {
//     try {
//         const { category, email } = req.query; // Get the category and email from query params
//         // Find documents based on both category and email
//         const data = await FormData.find({ category, email });
//         res.status(200).json(data); // Return the data
//     } catch (err) {
//         console.error(err); // Log the error for debugging purposes
//         res.status(500).json({ message: 'Server error' });
//     }
// });




// export default router;

import express, { Router } from "express";
import { FormData } from "../models/formModel";
import intercomAPI from "../utils/interCom"; // Import Intercom config

const router: Router = express.Router();

// POST route to save form data and send to Intercom
router.post("/services", async (req, res) => {
  try {
    const { email, category, comment } = req.body;

    // Save data to MongoDB
    const data = await FormData.create(req.body);

    // Send data to Intercom as a new conversation
    await intercomAPI.post("/messages", {
      from: {
        type: "user",
        email,
      },
      body: `Category: ${category}\nComment: ${comment}`,
    });

    res.status(200).json({ message: "Data saved and sent to Intercom.", data });
  } catch (err) {
    console.error("Failed due to:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET route to retrieve form data
router.get("/services", async (req, res) => {
  try {
    const { category, email } = req.query; // Get the category and email from query params
    const data = await FormData.find({ category, email }); // Retrieve data from MongoDB
    res.status(200).json(data); // Return the data
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: "Server error" });
  }
});

export default router;