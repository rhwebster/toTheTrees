'use strict';

module.exports = (sequelize, DataTypes) => {
    const RentalApp = sequelize.define('RentalApp',
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            reason: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            rentalType: {
                type: DataTypes.BOOLEAN,
            },
        },
        {}
    );
    RentalApp.associate = function (models) {
        RentalApp.belongsTo(models.User, { foreignKey: "userId" })
    };

    return RentalApp;
}