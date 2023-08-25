const express = require('express')

const router = express.Router()

// GET all workouts
// localhost:4000/api/workouts/
router.get('/', (req, res) => {
  res.json({msg: 'Get all workouts'})
})

// POST a new workout
// localhost:4000/api/workouts/
router.post('/', (req, res) => {
  console.log("req.body::: ", req.body)
  res.json({msg: 'POST route working'})
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