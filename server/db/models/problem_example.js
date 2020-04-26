'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem_example = sequelize.define('Problem_example', {
    input_example: DataTypes.STRING,
    output_example: DataTypes.STRING
  }, {});
  Problem_example.associate = function(models) {
    // associations can be defined here
  };
  return Problem_example;
};