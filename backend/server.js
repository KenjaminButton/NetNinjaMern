const express = require('express')

// Express app
const app = express()

// Listen for requests
app.listen(4000, () => {
  console.log('listening on port 4000 right now')
})

