'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Messages', [
            {
                content: 'Cześć, czy możemy przełożyć spotkanie na jutro?',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Dziękuję za przesłanie dokumentów. Wszystko się zgadza.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                content: 'Przypominam o jutrzejszym terminie realizacji projektu.',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Messages", null, {});
    }
};
