const express = require('express')
const app = express()
const port = 3000

const productRoutes = require('./routes/products.js')

app.use(express.json())
app.use('/products/', productRoutes)

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server RESTful: http://localhost:${port}/`)
})
