const router = require("express").Router();
const Sequelize = require("sequelize");
const sequelize = require("../db/sequalizeSetup");
const models = require("../models/index");

router.get("/", (req, res) => {
  models.Task.findAll()
    .then(taskResponse => {
      return res.status(200).json(taskResponse);
    })
    .catch(error => console.log(error));
});

module.exports = router;
