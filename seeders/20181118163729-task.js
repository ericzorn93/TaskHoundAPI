"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("Tasks", [
      {
        title: "Testing Title",
        body: "This is a testing body for the first task",
        description: "How do you like this description?",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Second Test",
        body: "Second body for the second task",
        description: "Another Description?",
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Tasks", null, {});
  }
};
