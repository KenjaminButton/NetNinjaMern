const express = require('express')
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout
} = require('../controllers/workoutController')

const Workout = require('../models/WorkoutModel')


const router = express.Router()

// GET all workouts
// localhost:4000/api/workouts/
router.get('/', getWorkouts)

// POST a new workout
// localhost:4000/api/workouts/
router.post('/', createWorkout)

// GET a single workout
// localhost:4000/api/workouts/:id
router.get('/:id', getSingleWorkout)

// DELETE a single workout
// localhost:4000/api/workouts/:id
router.delete('/:id', (req, res) => {
  res.json({msg: 'DELETE a single workout'})
})

// PATCH a single workout
// localhost:4000/api/workouts/:id
router.patch('/:id', (req, res) => {
  res.json({msg: 'PATCH a single workout'})
})

// localhost:4000/api/workouts/hello
router.get('/hello', (req, res) => {
  res.json({msg: 'Hello genius!'})
})

module.exports = router