'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define('Problem', {
    title: DataTypes.STRING,
    problem_info: DataTypes.STRING,
    input_info: DataTypes.STRING,
    output_info: DataTypes.STRING,
    limit: DataTypes.INTEGER,
    total_submit: {type: DataTypes.INTEGER, defaultValue: 0},
    total_solved: {type: DataTypes.INTEGER, defaultValue: 0},
  }, {});
  Problem.associate = function(models) {
    // associations can be defined here
    Problem.hasMany(models.User_problem)
    Problem.hasMany(models.Submit)
    Problem.hasMany(models.Problem_judge)
    Problem.hasMany(models.Problem_example)
  };
  return Problem;
};