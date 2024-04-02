import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json()); // to parse incomming requests with JSON payloads (request body)

app.use("/api/auth",authRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.listen(PORT, () => {
    connectToMongoDB(); 
    console.log(`server is running at port ${PORT}`);
})