'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      address1: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING(100),
      },
      address3: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      latitude: {
        type: Sequelize.FLOAT(10,6),
        allowNull: false,
      },
      longitude: {
        type: Sequelize.FLOAT(10,6),
        allowNull: false,
      },
      picUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id"
        },
      },
      description: {
        type: Sequelize.TEXT
      },
      maxGuests: {
        type: Sequelize.INTEGER
      },
      pricePerDay: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Listings');
  }
};