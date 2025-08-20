const Kendaraan = require('./Kendaraan.js')

class Motor extends Kendaraan {
  constructor (nama, situasi) {
    super(nama, situasi)
  }
  info() {
    return `Ini adalah motor ${this._nama} dalam situasi sedang ${this._situasi === true ? "dinyalakan" : "dimatikan"}`
  }
  start() {
    if (this._situasi === false) {
      this._situasi = true
      return "Motor dinyalakan"
    } else {
      return "Motor sudah dinyalakan"
    }
  }
  stop() {
    if (this._situasi === true) {
      this._situasi = false
      return "Motor dimatikan"
    } else {
      return "Motor sudah dimatikan"
    }
  }
}

module.exports = Motor
