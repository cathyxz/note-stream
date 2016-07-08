"use strict";

module.exports = function(sequelize, DataTypes) {
  var Lecture = sequelize.define("Lecture", {
    date: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        Lecture.belongsTo(models.Course, {as: 'Course', foreignKey: 'CourseId'});
        Lecture.hasMany(models.Note);
      }
  }
  });

  return Lecture;
};