'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_problem = sequelize.define('User_problem', {
    solved: DataTypes.BOOLEAN
  }, {});
  User_problem.associate = function(models) {
    // associations can be defined here
  };
  return User_problem;
};