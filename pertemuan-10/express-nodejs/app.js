const express = require('express')
const app = express()
const port = 3000
const productRouter = require('./routes/products.js')

app.use(express.json())
app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
