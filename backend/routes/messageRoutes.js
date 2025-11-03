import express from "express";
import messageController from "../controllers/messageController.js";
import withErrorHandler from "../utils/withErrorHandler.js";

const router = express.Router();

router.get("/api/messages", withErrorHandler(messageController.getMessages));
router.post("/api/messages", withErrorHandler(messageController.createMessage));
router.patch("/api/messages/:id", withErrorHandler(messageController.updateMessage));
router.delete("/api/messages/:id", withErrorHandler(messageController.deleteMessage));

export default router;