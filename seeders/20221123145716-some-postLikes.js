"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "postLikes",
      [
        {
          postId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 1,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 2,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          postId: 3,
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("postLikes", null, {});
  },
};
