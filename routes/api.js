const router = require("express").Router();

//const db = require("../models");
//change your reference to the db to:
const db = require("../models/workout");
//previously it was console.log()-ing db: {workout { model: Workout } } instead of {model: Workout}


router.get("/api/workouts", ({ body }, res) => {
  
  //db.Workout.find({})
  //chnage all of your references from db.Workout to `db`
    db.then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  //db.Workout.create(req.body)
  db..create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function ({ body, params }, res) {
  //db.Workout.updateOne({ _id: params.id }, { $push: { exercises: body } })
  db.updateOne({ _id: params.id }, { $push: { exercises: body } })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  //db.Workout.find({})
  db.find({})
    .then((range) => {
      res.json(range);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
