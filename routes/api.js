let mongoose = require('mongoose')
let db = require('../models')

function apiRoutes(app) {
  app.get('/api/workouts', function (req, res) {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })

  app.post('/api/workouts', function (req, res) {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })


  app.put('/api/workouts/:id', function (req, res) {
    db.Workout.findByIdAndUpdate(
      {
        _id: req.params.id
      },
     
      {$push: {exercises: req.body}},
      {
        new: true,
      }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })


  app.get('/api/workouts/range', function (req, res) {
    db.Workout.find({}).limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout)
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  })
}

module.exports = apiRoutes
