'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Barney',
        lastName: 'Stinson',
        address1: '1550 1st Ave',
        address2: 'Apt 629',
        address3: 'New York, NY 10028',
        email: 'barney@awesome.com',
        hashedPassword: await bcrypt.hash('suitup', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jason',
        lastName: 'Mendoza',
        address1: '1 Bortles Way',
        address3: 'Good Place, Heaven, 12358',
        email: 'jmoney@bortlesfans.com',
        hashedPassword: await bcrypt.hash('bortles', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Serena',
        lastName: 'Van Der Woodsen',
        address1: '1136 5th Ave',
        address2: 'Penthouse',
        address3: 'New York, NY 10128',
        email: 'svdw@gossipgirl.com',
        hashedPassword: await bcrypt.hash('danornate', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Joe',
        lastName: 'Exotic',
        address1: '25803 N County Rd 3250',
        address3: 'Wynnwood, OK 73098',
        email: 'joe@tigerking.com',
        hashedPassword: await bcrypt.hash('caroldidit', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Chandler',
        lastName: 'Bing',
        address1: '90 Bedford St',
        address2: 'Apt 19',
        address3: 'New York, NY 10014',
        email: 'chandler@bing.com',
        hashedPassword: await bcrypt.hash('monicajoeyrachelrossphoebe', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Walter',
        lastName: 'White',
        address1: '308 Negra Arroyo Ln',
        address3: 'Albuquerque, NM 87111',
        email: 'heizenburg@lospolloshermanos.com',
        hashedPassword: await bcrypt.hash('saymyname', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Eric',
        lastName: 'Taylor',
        address1: '13084 E 42nd St',
        address3: 'Dillon, TX 79762',
        email: 'etaylor@eastdillon.edu',
        hashedPassword: await bcrypt.hash('tammyjuliegrace', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Troy',
        lastName: 'Barnes',
        address1: '1 Main St',
        address2: 'Guzman Hall #44',
        address3: 'Greendale, CO 80918',
        email: 'troy@gcc.edu',
        hashedPassword: await bcrypt.hash('poppop', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tyrion',
        lastName: 'Lannister',
        address1: '1 Red Keep',
        address3: 'Kings Landing, Westeros, 20419',
        email: 'tyrion@thelannisters.org',
        hashedPassword: await bcrypt.hash('drinkandknowthings', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Michael',
        lastName: 'Scott',
        address1: '1128 Lafayette St',
        address3: 'Scranton, PA, 18504',
        email: 'mscott@dundermifflin.com',
        hashedPassword: await bcrypt.hash('password', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Pete',
        lastName: 'Nelson',
        address1: '6922 Preston-Fall City Rd SE',
        address3: 'Issaquah, WA, 98027',
        email: 'pete@nelson.inc',
        hashedPassword: await bcrypt.hash('treehousepoint', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
