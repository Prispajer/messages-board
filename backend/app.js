import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import messageRoutes from "./routes/messageRoutes.js"
import {config} from "dotenv";
import {checkConnection} from "./db/connection.js";
import errorHandler from "./middlewares/errorHandler.js";

// Initialize environment variables
config();

const app = express();
// Middleware
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
}));

// All routes defined in messageRouter
app.use(messageRoutes);

// Global Error Handling Middleware
app.use(errorHandler);

// Enable CORS before routes


// DB Connection
(async () => {
    await checkConnection();
    app.listen(process.env.PORT, () => console.log(`Server is running on port: ${process.env.PORT}`))
})();