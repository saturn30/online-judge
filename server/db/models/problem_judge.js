'use strict';
module.exports = (sequelize, DataTypes) => {
  const Problem_judge = sequelize.define('Problem_judge', {
    input_judge: DataTypes.STRING,
    output_judge: DataTypes.STRING
  }, {});
  Problem_judge.associate = function(models) {
    // associations can be defined here
    Problem_judge.hasMany(models.Submit_result)
  };
  return Problem_judge;
};