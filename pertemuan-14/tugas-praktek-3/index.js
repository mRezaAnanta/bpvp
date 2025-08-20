class Produk {
  constructor(nama, harga) {
    this._nama = nama
    this._harga = harga
  }
  deskripsi() {
    return `Nama: ${this._nama}, Harga: ${this._harga}`
  }
}

class Elektronik extends Produk {
  constructor(nama, harga, garansi) {
    super(nama, harga)
    this._garansi = garansi
  }
  deskripsi() {
    return `Elektronik: ${this._nama}, Harga: ${this._harga}, Garansi: ${this._garansi} tahun`
  }
}

class Pakaian extends Produk {
  constructor(nama, harga, ukuran) {
    super(nama, harga)
    this._ukuran = ukuran
  }
  deskripsi() {
    return `Pakaian: ${this._nama}, Harga: ${this._harga}, Ukuran: ${this._ukuran}`
  }
}

class Makanan extends Produk {
  constructor(nama, harga, expire) {
    super(nama, harga)
    this._expire = expire
  }
  deskripsi() {
    return `Makanan: ${this._nama}, Harga: ${this._harga}, Expire: tanggal ${this._expire}`
  }
}

let elektronik = new Elektronik("Laptop", 8000000, 2)
let pakaian = new Pakaian("Kaos", 100000, "L")
let makanan = new Makanan("Susu UHT", 20000, "02-10-2025")
console.log(elektronik.deskripsi())
console.log(pakaian.deskripsi())
console.log(makanan.deskripsi())
