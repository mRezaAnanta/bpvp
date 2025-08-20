class Kendaraan {
  _situasi

  constructor (nama, situasi = false) {
    try {
      if (typeof nama !== "string") {
        throw new Error("Nama Kendaraan harus dalam tipe string")
      } else {
        this._nama = nama
      }
    } catch (err) {
      console.log(err.message)
    }
    this._situasi = situasi
  }
  info() {
    return `Ini adalah kendaraan ${this._nama} dalam situasi sedang ${this._situasi === true ? "dinyalakan" : "dimatikan"}`
  }
  start() {
    if (this._situasi === false) {
      this._situasi = true
      return "Kendaraan dinyalakan"
    } else {
      return "Kendaraan sudah dinyalakan"
    }
  }
  stop() {
    if (this._situasi === true) {
      this._situasi = false
      return "Kendaraan dimatikan"
    } else {
      return "Kendaraan sudah dimatikan"
    }
  }
}

module.exports = Kendaraan
