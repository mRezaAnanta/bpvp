const Kendaraan = require('./Kendaraan.js')

class Sepeda extends Kendaraan {
  constructor (nama, situasi) {
    super(nama, situasi)
  }
  info() {
    return `Ini adalah sepeda ${this._nama} dalam situasi sedang ${this._situasi === true ? "dinyalakan" : "dimatikan"}`
  }
  start() {
    if (this._situasi === false) {
      this._situasi = true
      return "Sepeda dinyalakan"
    } else {
      return "Sepeda sudah dinyalakan"
    }
  }
  stop() {
    if (this._situasi === true) {
      this._situasi = false
      return "Sepeda dimatikan"
    } else {
      return "Sepeda sudah dimatikan"
    }
  }
}

module.exports = Sepeda
