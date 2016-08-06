'use strict';

module.exports = function (sequelize, DataTypes) {
  var Lecture = sequelize.define("Lecture", {
    date: DataTypes.DATEONLY,
    sequence: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Lecture.belongsTo(models.Course);
        Lecture.hasMany(models.Note);
      }
    }
  });

  return Lecture;
};