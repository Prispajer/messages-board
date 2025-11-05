import Message from "../models/message.js";

const getMessages = async () => {
    return await Message.findAll();
};

const createMessage = async (data) => {
    return await Message.create(data);
};

const updateMessage = async (id, data) => {
    const message = await Message.findByPk(id);
    if (!message) return null;
    await message.update(data);
    return message;
};

const deleteMessage = async (id) => {
    const message = await Message.findByPk(id);
    if (!message) return null;
    await message.destroy();
    return message;
};

export default {
    getMessages,
    createMessage,
    updateMessage,
    deleteMessage,
};