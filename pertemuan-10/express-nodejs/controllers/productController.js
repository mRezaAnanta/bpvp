// Array products tempat data akan disimpan dll
let products = [
  { id: 1, name: "Telur", price: 3000 },
  { id: 2, name: "Mie Sedap", price: 4000 },
]

// Mengambil semua data didalam products arr
// [Response Status 200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)
exports.getAllProducts = (req, res) => {
  res.status(200).json(products)
}

// Hanya mengambil data dengan parameter id tertentu didalam request
exports.getProductById = (req, res) => {
  // parsing data request menjadi integer
  const id = parseInt(req.params.id)
  // filter product didalam arr sesuai dengan id
  const product = products.find(p => p.id === id)
  // jika id tidak ditemukan maka kirim response 404
  if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' })
  // jika id ada maka kirim response 200 dan itemnya
// [Response Status 200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)
  res.status(200).json(product)
}

// Membuat product terbaru dan simpan ke dalam array products dengan id paling terbaru
exports.createProduct = (req, res) => {
  // parse data dari request.body dengan nama variable name dan price
  const { name, price } = req.body
  // jika didalam request tidak ada nama atau typeof price bukan angka maka kirim response 400
  if (!name || typeof price !== 'number') {
// [Response Status 400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400)
    return res.status(400).json({ message: 'Input tidak valid' })
  }

  // buat variable baru untuk di push ke array products dan kirim response 201 dan product terbaru
  // buat id baru dengan mencari length dari array products
  // jika array products >= 1 maka ambil length terakhirnya + 1 (ex: length sebelumnya adalah 2, maka id product terbaru jadi 3)
  // kalau array products == 0 maka id product terbaru = 1
  const newProduct = {
    id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name,
    price
  }

  products.push(newProduct)
// [Response Status 201](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201)
  res.status(201).json(newProduct)
}

// Mengubah data product (ex: mengganti nama/price)
exports.updateProduct = (req, res) => {
  // parsing data request menjadi integer
  const id = parseInt(req.params.id)
  // filter product didalam arr sesuai dengan id
  const product = products.find(p => p.id === id)
  // jika id tidak ditemukan maka kirim response 404
// [Response Status 404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404)
  if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' })

  // parse data dari request.body dengan nama variable name dan price
  const { name, price } = req.body
  // jika didalam request tidak ada nama atau typeof price bukan angka maka kirim response 400
  if (!name || typeof price !== 'number') {
// [Response Status 400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400)
    return res.status(400).json({ message: 'Input tidak valid' })
  }

  // ganti nama dan price lama menjadi baru dan kirim response 200 dan productnya
  product.name = name
  product.price = price
// [Response Status 200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)
  res.status(200).json(product)
}

// Menghapus data didalam array products melalui idnya
exports.deleteProduct = (req, res) => {
  // parsing data request menjadi integer
  const id = parseInt(req.params.id)
  // mencari index dari id didalam array products
  const index = products.findIndex(p => p.id === id)
  // jika index tidak ditemukan maka kirim response 400
// [Response Status 400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400)
  if (index === -1) return res.status(400).json({ message: 'Produk tidak ditemukan' })

  // hapus data didalam array products dengan index dari idnya dan kirim status 204
  products.splice(index, 1)
// [Response Status 200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200)
  res.status(204).send()
}
