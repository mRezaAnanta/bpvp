let products = [
  { id: 1, name: "Telur", price: 3000 },
  { id: 2, name: "Mie Sedap", price: 4000 },
]

exports.getAllProducts = (req, res) => {
  res.status(200).json(products)
}

exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)
  if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' })
  res.status(200).json(product)
}

exports.createProduct = (req, res) => {
  const { name, price } = req.body
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ message: 'Input tidak valid' })
  }

  const newProduct = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price
  }

  products.push(newProduct)
  res.status(201).json(newProduct)
}

exports.updateProduct = (req, res) => {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id)
  if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' })

  const { name, price } = req.body
}
