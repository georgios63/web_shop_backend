"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "George",
          email: "g@g.com",
          password: bcrypt.hashSync("wadadaw", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karla",
          email: "k@k.com",
          password: bcrypt.hashSync("wadadaw", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olga",
          email: "o@o.com",
          password: bcrypt.hashSync("wadadaw", 10),
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
