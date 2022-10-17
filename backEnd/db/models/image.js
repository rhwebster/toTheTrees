'use strict';

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image',
        {

        },
        {}
    ); 
    Image.associate = function(models) {
        Image.belongsTo(models.Listing, { foreignKey: 'placeId' });  
    }
    return Image;
};