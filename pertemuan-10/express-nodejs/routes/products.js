const express = require('express')
const router = express.Router()

const controller = require('../controllers/productController.js')

// contoh url untuk dipakai didalam [Postman](https://www.postman.com/) dan [HTTP Request Methodnya](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)
router.get('/', controller.getAllProducts) // localhost:3000/products GET
router.get('/:id', controller.getProductById) // localhost:3000/products/1 GET
router.post('/', controller.createProduct) // localhost:3000/products POST
router.put('/:id', controller.updateProduct) // localhost:3000/products/1 PUT
router.delete('/:id', controller.deleteProduct) // localhost:3000/products/1 DELETE

module.exports = router
