import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import router from './routes/siswaRoute.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})
