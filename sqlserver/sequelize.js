const { Sequelize } = require('sequelize');

// Set up the connection to your MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,  // Set to true to log SQL queries to the console
});

module.exports = sequelize;