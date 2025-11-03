import express from "express";
import bodyParser from "body-parser";
import {config} from "dotenv";
import checkConnection from "./db/connection.js";
import errorHandler from "./middlewares/errorHandler.js";

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
app.use(errorHandler);

// DB Connection
(async () => {
    await checkConnection();
    app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`))
})();