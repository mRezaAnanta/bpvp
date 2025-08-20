class Pelanggan {
  constructor(nama, umur) {
    this._nama = nama
    this._umur = umur
  }
  prosesData() {
    try {
      if (this._nama.length < 1 || typeof this._nama !== "string") {
        throw new Error(`Nama ${typeof this._nama} ${this._nama} tidak boleh kosong dan harus berupa string`)
      } else if (this._umur <= 0 || typeof this._umur !== "number") {
        throw new Error(`Umur ${typeof this._umur} ${this._umur} harus lebih dari 0 dan harus berupa integer`)
      } else {
        return `Pelanggan: ${this._nama}, umur ${this._umur} tahun`
      }
    } catch (err) {
      return `Terjadi Kesalahan: ${err.message}`
    }
  }
}

let valid = new Pelanggan("Alice", 30)
let tidakValidNama = new Pelanggan(0, 30)
let tidakValidUmur = new Pelanggan("Alice", "had")

console.log(valid.prosesData())
console.log(tidakValidNama.prosesData())
console.log(tidakValidUmur.prosesData())
