'use strict';

const { default: ListingsPage } = require("../frontEnd/src/components/ListingsPage");

module.exports = (sequelize, DataTypes) => {
  const listings = sequelize.define('Listings', {
    name: {
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
    latitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    maxGuests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pricePerDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  listings.associate = function(models) {
    Listing.belongsTo(models.User, { foreignKey: "userId" });
    Listing.hasMany(models.Reservation, { foreignKey: "listingId" });
    Listing.hasMany(models.TreehouseReview, { foreignKey: "listingId" });
    Listing.belongsToMany(models.Favorite, { through: "Favorite", foreignKey: "listingId", otherKey: "userId" });
  };
  return Listings;
};