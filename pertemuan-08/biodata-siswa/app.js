const app = require('./config/aplikasi.js')
const database = require('./data/siswa.js')
const showBiodata = require('./logic/tampilkanBiodata.js')
const logikaKategori = require('./logic/logikaKategori.js')
const data = require('./data/hard-data-siswa.js')

try {
  showBiodata(database.readAndWriteData(data), app.VERSION, app.AUTHOR)
  database.flushData()
} catch (err) {
  console.log(err.message)
}
