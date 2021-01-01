'use strict';

const { default: ReservationsReducer } = require("../../../frontEnd/src/store/reservations");

module.exports = (sequelize, DataTypes) => {
  const reservations = sequelize.define('Reservations', {
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    numGuests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    listingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    guestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  reservations.associate = function(models) {
    Reservation.belongsTo(models.User, { foreignKey: "guestId" });
    Reservation.belongsTo(models.Listing, { foreignKey: "listingId" });
  };
  return Reservations;
};