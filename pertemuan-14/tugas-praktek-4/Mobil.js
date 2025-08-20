const Kendaraan = require('./Kendaraan.js')

class Mobil extends Kendaraan {
  constructor (nama, situasi) {
    super(nama, situasi)
  }
  info() {
    return `Ini adalah Mobil ${this._nama} dalam situasi sedang ${this._situasi === true ? "dinyalakan" : "dimatikan"}`
  }
  start() {
    if (this._situasi === false) {
      this._situasi = true
      return "Mobil dinyalakan"
    } else {
      return "Mobil sudah dinyalakan"
    }
  }
  stop() {
    if (this._situasi === true) {
      this._situasi = false
      return "Mobil dimatikan"
    } else {
      return "Mobil sudah dimatikan"
    }
  }
}

module.exports = Mobil
