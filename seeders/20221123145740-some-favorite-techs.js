"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "favoriteTechnologies",
      [
        {
          technologyId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          technologyId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("favoriteTechnologies", null, {});
  },
};
