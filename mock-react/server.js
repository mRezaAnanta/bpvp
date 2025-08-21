// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

// require('dotenv').config()
import 'dotenv/config'
const port = process.env.PORT

// const userRoutes = require('./routes/userRoutes.js')
import userRoutes from './src/routes/userRoutes.js'
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
