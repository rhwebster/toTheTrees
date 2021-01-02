'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING(100),
    },
    address3: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    profilePicUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      unique: true,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};