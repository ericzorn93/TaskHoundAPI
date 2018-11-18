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

// Get a specific task
router.get("/:id", (req, res, next) => {
  models.Task.findByPk(req.params.id)
    .then(task => {
      if (task) {
        res.status(200).json({ success: true, data: task });
      } else {
        res.status(404).json({ success: false, data: [] });
      }
    })
    .catch(error => console.log(error));
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
      title: "This is hello world from Eric Zorn",
      body: "How are you doing today?",
      description: "This is the best description yet",
      completed: "0",
      createdAt: "2018-11-18T23:24:06.443Z",
      updatedAt: "2018-11-18T23:24:06.443Z"
    })
      .then(data => res.json(data))
      .catch(err => console.log(err));
  }
});

// Delete Specific Task
router.delete("/:id", (req, res, next) => {
  models.Task.destroy({ where: { id: req.params.id } }).then(data =>
    res.json({
      deleted: true,
      data: data
    })
  );
});

module.exports = router;
