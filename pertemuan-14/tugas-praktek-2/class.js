class BelanjaBuah {
  constructor(namaBuah, jumlah) {
    this._namaBuah = namaBuah
    this._jumlah = jumlah
  }
  info() {
    return `Nama buah yang ingin dibeli adalah ${this._namaBuah} dan jumlahnya ${this._jumlah}`
  }
  getNamaBuah() {
    return this._namaBuah
  }
  setNamaBuah(namaBaru) {
    if (typeof namaBaru !== "string") {
      return "Nama yang anda input bukan merupakan string!"
    } else {
      let namaLama = this._namaBuah
      this._namaBuah = namaBaru
      return `Mengganti nama buah dari ${namaLama} menjadi ${namaBaru}`
    }
  }
  getJumlah() {
    return this._jumlah
  }
  tambahJumlah(number) {
    for (let i = 0; i < number; i++) {
      console.log(`Membeli ${this._jumlah += 1} buah ${this._namaBuah}`)
    }
  }
}

let buah = new BelanjaBuah("Pepaya", 4)
console.log(buah.getNamaBuah())
console.log(buah.getJumlah())
console.log(buah.info())
console.log(buah.setNamaBuah("Mangga"))
buah.tambahJumlah(5)
console.log(buah.getJumlah())
