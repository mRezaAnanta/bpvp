import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import siswaRoute from './routes/siswaRoute.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(siswaRoute)

app.listen(PORT, () => {
  console.log(`server berjalan di port ${PORT}`)
})
