const bcrypt = require("bcrypt");

("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Kelley",
          email: "kelley@codaisseur.com",
          password: bcrypt.hashSync("abcd", 10),
          intro: `Hi there! I'm Kelley, teacher of JavaScript, student of life`,
          githubUsername: "kelleyvanevert",
          website: "https://hi-im-kelley.netlify.com/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jeroen",
          email: "jeroen@codaisseur.com",
          password: bcrypt.hashSync("abcd", 10),
          githubUsername: "Jeroenbruinsma",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Matias",
          email: "matias@codaisseur.com",
          password: bcrypt.hashSync("abcd", 10),
          intro: `Hi! I'm Matias, teacher of Codaisseur, from Uruguay!`,
          githubUsername: "matiagarcia91",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
