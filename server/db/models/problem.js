'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem = sequelize.define('Problem', {
    title: DataTypes.STRING,
    problem_info: DataTypes.STRING,
    input_info: DataTypes.STRING,
    output_info: DataTypes.STRING
  }, {});
  Problem.associate = function(models) {
    // associations can be defined here
  };
  return Problem;
};