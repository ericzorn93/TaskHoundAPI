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

// const Task = dbConfig.define('task', {
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,
//     deadline: Sequelize.DATE
// });

module.exports = {
  configuration: configuration,
  // Task: Task
};
