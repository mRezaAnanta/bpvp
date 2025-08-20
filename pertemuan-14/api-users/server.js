const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT

// const studentRoutes = require('./routes/students.js')
//
// app.use(express.json())
// app.use('/students/', studentRoutes)

try {
  app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })
} catch (err) {
  console.log(err.message)
}
