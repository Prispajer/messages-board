import sequelize from "././sequelize.js";

export const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        process.exit(1);
    }
};