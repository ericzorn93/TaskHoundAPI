const Sequelize = require("sequelize");
const dbConfig = require("./sequalizeSetup");

const configuration = {
  database: "Task_Hound_JS",
  path: "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  dialect: "mysql"
};

module.exports = {
  configuration: configuration
};
