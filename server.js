const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");

// Middleware
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Imports
const taskRoutes = require("./routes/taskRoutes");

// Route Usage
app.use("/api/v1/tasks", taskRoutes);

// Port
const port = process.env.PORT || 8000;

// Run Server
app.listen(port, () =>
  console.log(
    chalk.underline.white.bgBlack.bold(`Listenting on port...${port}!`)
  )
);
