const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

require('dotenv').config()
const port = process.env.PORT

const userRoutes = require('./routes/userRoutes.js')
app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', userRoutes)

try {
  app.listen(port, () => {
    console.log(`App listening at port ${port}`)
  })
} catch (err) {
  console.log(err.message)
}
