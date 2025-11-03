'use strict';
import { Model, DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Message.init(
    {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [3, 255],
            }
        },
    },
    {
        sequelize,
        modelName: "Message",
        tableName: "Messages",
    }
);


    export default  Message;
