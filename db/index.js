const configuration = {
  database: "Task_Hound_JS",
  path: "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  dialect: "mysql"
};

const TaskSchema = {};

module.exports = {
  configuration: configuration,
  TaskSchema: TaskSchema
};
