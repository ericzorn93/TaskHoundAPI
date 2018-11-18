const router = require("express").Router();
const models = require("../models/index");

// Get all Tasks
router.get("/", (req, res, next) => {
  models.Task.findAll()
    .then(taskResponse => {
      return res.status(200).json({
        success: true,
        data: taskResponse
      });
    })
    .catch(error =>
      res.status(401).json({
        success: false,
        data: error
      })
    );
});

// Post a task
router.post("/", async (req, res, next) => {
  // Destructuring Body Object
  const {
    title,
    body,
    description,
    completed,
    createdAt,
    updatedAt
  } = req.body;

  if (title === null || title === undefined) {
    res.status(400).json("title is null or undefined");
  } else if (body === null || body === undefined) {
    res.status(400).json("body is null or undefined");
  } else if (description === null || description === undefined) {
    res.status(400).json("description is null or undefined");
  } else if (completed === null || completed === undefined) {
    res.status(400).json("completed is null or undefined");
  } else if (createdAt === null || createdAt === undefined) {
    res.status(400).json("createdAt is null or undefined");
  } else if (updatedAt === null || updatedAt === undefined) {
    res.status(400).json("updatedAt is null or undefined");
  } else {
    models.Task.create({
      title: title,
      body: body,
      description: description,
      completed: completed,
      createdAt: createdAt,
      updatedAt: updatedAt
    }).then(data =>
      res.status(201).json({
        success: true,
        data: data
      })
    );
  }
});

module.exports = router;
