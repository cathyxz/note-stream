'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Lectures', [{
        date: new Date(2016, 1, 1),
        CourseId: 1
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Lectures', null, {});
  }
};
