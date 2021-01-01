'use strict';
module.exports = (sequelize, DataTypes) => {
  const guestReviews = sequelize.define('GuestReviews', {
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
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  guestReviews.associate = function(models) {
    GuestReview.belongsTo(models.User, { foreignKey: "guestId" });
    GuestReview.belongsTo(models.User, { foreignKey: "ownerId" });
  };
  return GuestReviews;
};