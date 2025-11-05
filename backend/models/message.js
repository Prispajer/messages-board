'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

class Message extends Model {
    static associate(models) {
        // define association here
    }
}

Message.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue('content', value?.trim());
            },
            validate: {
                notEmpty: {
                    msg: "Wiadomość nie może być pusta"
                },
                len: {
                    args: [3, 255],
                    msg: "Wiadomość musi mieć od 3 do 255 znaków"
                }
            },
        },
    },
    {
        sequelize,
        modelName: "Message",
        tableName: "Messages",
    }
);

export default Message;

