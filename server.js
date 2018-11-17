const express = require("express");
const app = express();
const sequelize = require("sequelize");

const port = process.env.PORT || 50000;

// Run Server
app.listen(port, () => console.log(`Listening on port...${port}`));
