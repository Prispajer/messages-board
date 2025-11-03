import express from "express";
import bodyParser from "body-parser";
import {config} from "dotenv";
import {checkConnection} from "./db/connection.js";

// Initialize environment variables
config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({message: "Interview task"});
});

// Global Error Handling Middleware
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({success: false, message: message, data: data});
});

// DB Connection
(async () => {
    await checkConnection();
    app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`))
})();