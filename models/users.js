'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
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
  users.associate = function(models) {
    User.hasMany(models.Listing, { foreignKey: "ownerId" });
    User.hasMany(models.Reservation, { foreignKey: "guestId" });
    User.hasMany(models.TreehouseReview, { foreignKey: "guestId" });
    User.hasMany(models.GuestReview, { foreignKey: "ownerId"});
    User.hasMany(models.GuestReview, { foreignKey: "guestId" });
    User.belongsToMany(models.Listing, { through: "Favorite", foreignKey: "userId", otherKey: "listingId" });
  };
  return Users;
};