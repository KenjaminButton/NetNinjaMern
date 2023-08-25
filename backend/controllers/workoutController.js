// Writing a bunch of functions that we can reference inside routes/workouts.js
const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getAllWorkouts = async (req, res) => {
  // FIND ALL
  // Sort by desc order
  const workouts = await Workout.find({}).sort({createdAt: -1})

  res.status(200).json(workouts)
}


// GET a single workout
const getSingleWorkout = async (req, res) => {
  const {id} = req.params

  // Error handling to make app not CRASH and shit the bed
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'NO SUCH WORKOUT'})
  }

  // console.log('this is the ID', id) 
  // res.status(200).json({"ken": "FUNNY"})
  const workout = await Workout.findById(id)
  
  // Error handling
  if (!workout) {
    res.status(404).json({error: 'No such workout'})
  }
  // workout found
  res.status(200).json(workout)
}


// POST/CREATE a new workout
const createWorkout = async (req, res) => {
  // Creating a NEW workout
  const {title, reps, load} = req.body
  // Adding document to database
  try {
    const workout = await Workout.create({
      title,
      reps,
      load
    })
    res.status(200).json(workout)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

// DELETE a workout

// PATCH/UPDATE a workout


module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout
}