const express = require('express')
const Workout = require('../models/WorkoutModel')

const router = express.Router()

// GET all workouts
// localhost:4000/api/workouts/
router.get('/', (req, res) => {
  res.json({msg: 'Get all workouts'})
})

// POST a new workout
// localhost:4000/api/workouts/
router.post('/', async (req, res) => {
  // console.log("req.body::: ", req.body)
  
  try {
    const {title, reps, load} = req.body
    const workout = await Workout.create({
      title,
      reps,
      load
    })
    res.status(200).json(workout)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
})

// GET a single workout
// localhost:4000/api/workouts/:id
router.get('/:id', (req, res) => {
  res.json({msg: 'GET a single workout'})
})

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