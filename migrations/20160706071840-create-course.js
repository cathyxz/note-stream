'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Courses', { 
      id: {
        type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
      },
      title: Sequelize.STRING,
      catalog_id: Sequelize.STRING,
      description: Sequelize.TEXT,
      semester: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Courses');
  }
};
