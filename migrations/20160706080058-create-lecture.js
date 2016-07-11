'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Lectures', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      date: Sequelize.DATEONLY,
      CourseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
				references: { model: "Courses", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "RESTRICT"
      },
      sequence: Sequelize.INTEGER,
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Lectures');
  }
};


