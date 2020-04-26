'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem_judge = sequelize.define('Problem_judge', {
    input_judge: DataTypes.STRING,
    output_judge: DataTypes.STRING
  }, {});
  Problem_judge.associate = function(models) {
    // associations can be defined here
  };
  return Problem_judge;
};