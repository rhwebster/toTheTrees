'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('Favorites', {
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  favorites.associate = function(models) {
    // associations can be defined here
  };
  return Favorites;
};