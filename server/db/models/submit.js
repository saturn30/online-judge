'use strict';
module.exports = (sequelize, DataTypes) => {
  const Submit = sequelize.define('Submit', {
    code: DataTypes.STRING,
    solved: {type : DataTypes.BOOLEAN, defaultValue: false}
  }, {});
  Submit.associate = function(models) {
    // associations can be defined here
    Submit.hasMany(models.Submit_result)
  };
  return Submit;
};