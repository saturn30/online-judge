'use strict';
module.exports = (sequelize, DataTypes) => {
  const Submit_result = sequelize.define('Submit_result', {
    result: DataTypes.BOOLEAN
  }, {});
  Submit_result.associate = function(models) {
    // associations can be defined here
  };
  return Submit_result;
};