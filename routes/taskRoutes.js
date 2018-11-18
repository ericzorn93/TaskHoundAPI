const router = require("express").Router();
const sequelize = require("../db/sequalizeSetup");

router.get("/", (req, res) => {
    sequelize
    .sync()
    .then(() => {
      res.json("You have reached the home page");
    })
    .catch(err => console.log(err));
});

module.exports = router;
