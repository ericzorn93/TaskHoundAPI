// DB Setup
const DB_Info = require("../db/");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  DB_Info.configuration.database,
  DB_Info.configuration.username,
  DB_Info.configuration.password,
  {
    host: DB_Info.configuration.host,
    dialect: DB_Info.configuration.dialect
  }
);

module.exports = sequelize;
