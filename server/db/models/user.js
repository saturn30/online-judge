"use strict"
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      total_submit: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {}
  )
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
