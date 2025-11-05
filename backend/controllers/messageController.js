import messagesService from "../services/messageService.js";

const getMessages = async (req, res) => {
    const data = await messagesService.getMessages();
    res.status(200).json({success: true, data});
};

const createMessage = async (req, res) => {
    const data = await messagesService.createMessage(req.body);
    res.status(201).json({success: true, data});
};

const updateMessage = async (req, res) => {
    const {id} = req.params;
    const data = await messagesService.updateMessage(id, req.body);

    if (!data) {
        return res.status(404).json({success: false, message: "Message not found"});
    }

    res.status(200).json({success: true, data});
};

const deleteMessage = async (req, res) => {
    const {id} = req.params;
    const data = await messagesService.deleteMessage(id);

    if (!data) {
        return res.status(404).json({success: false, message: "Message not found"});
    }

    res.status(200).json({success: true, data: data});
};

export default {
    getMessages,
    createMessage,
    updateMessage,
    deleteMessage,
};