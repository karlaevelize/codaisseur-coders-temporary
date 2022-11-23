"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          tag: "github",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "bundling",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "react",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "hooks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "tech",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "useMemo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "useRef",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tag: "sequelize",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
