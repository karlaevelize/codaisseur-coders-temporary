"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "technologies",
      [
        {
          title: "JavaScript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "TypeScript",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Docker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Functional Programming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Promise.all",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Learning Strategies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("technologies", null, {});
  },
};
