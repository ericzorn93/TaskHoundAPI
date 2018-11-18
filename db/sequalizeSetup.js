// DB Setup
const DB_Info = require("../db/");
const Sequelize = require("sequelize");

const dbConfig = new Sequelize(
  DB_Info.configuration.database,
  DB_Info.configuration.username,
  DB_Info.configuration.password,
  {
    host: DB_Info.configuration.host,
    dialect: DB_Info.configuration.dialect
  }
);

// Schemas
const Task = dbConfig.define("task", {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  completed: Sequelize.BOOLEAN,
  due_date: Sequelize.DATE,
  date: Sequelize.DATE
});

module.exports = {
  dbConfig: dbConfig
};
