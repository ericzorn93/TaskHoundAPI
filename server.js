const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Route Imports
const taskRoutes = require("./routes/taskRoutes");

// Route Usage
app.use("/api/v1/tasks", taskRoutes);

// Port
const port = process.env.PORT || 5000;

// Run Server
app.listen(port, () =>
  console.log(
    chalk.red.underline.bold.bgGreenBright.bold(`Listenting on port...${port}!`)
  )
);
