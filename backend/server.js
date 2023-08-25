require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// Express app
const app = express()

// Global Middleware
app.use(express.json()) // attaches to the req object (e.g. req.body)
app.use( (req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
// localhost:4000/api/workouts
app.use('/api/workouts', workoutRoutes)

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000 on a Friday')
})

