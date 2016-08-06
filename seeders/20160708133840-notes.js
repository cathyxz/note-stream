'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Notes', [{
        content: 'This is a test',
        LectureId: 1,
        createdAt: "2014-01-01",
        updatedAt: "2014-01-01"
      }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Notes', null, {});
  }
};
