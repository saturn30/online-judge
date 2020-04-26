'use strict';
module.exports = (sequelize, DataTypes) => {
  const Submit = sequelize.define('Submit', {
    code: DataTypes.STRING,
    solved: DataTypes.BOOLEAN
  }, {});
  Submit.associate = function(models) {
    // associations can be defined here
  };
  return Submit;
};