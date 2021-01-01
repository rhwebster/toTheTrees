'use strict';
module.exports = (sequelize, DataTypes) => {
  const treehouseReviews = sequelize.define('TreehouseReviews', {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: type,
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: type,
    },
  }, {});
  treehouseReviews.associate = function(models) {
    TreehouseReview.belongsTo(models.User, { foreignKey: "guestId" });
    TreehouseReview.belongsTo(models.Listing, { foreignKey: "listingId" });
  };
  return TreehouseReviews;
};