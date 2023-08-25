require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// Global Middleware
app.use( (req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.json({msg: 'Welcome to our MERN NETNINJA APP!'})
})

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000 on a Friday')
})

