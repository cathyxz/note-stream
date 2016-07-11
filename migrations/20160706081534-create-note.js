'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Notes', { 
      id: {
        type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
      },
      content: {
        type: Sequelize.TEXT,
      },
      LectureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Lectures", key: "id" },
				onUpdate: "CASCADE",
				onDelete: "RESTRICT"
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Notes');
  }
};