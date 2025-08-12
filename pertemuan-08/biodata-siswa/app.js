const app = require('./config/aplikasi.js')
const readAndWriteData = require('./data/siswa.js')
const tampilkanBiodata = require('./logic/tampilkanBiodata.js')
const logikaKategori = require('./logic/logikaKategori.js')

let siswa = [
  { nama: "Richard", umur: 30, asal: "Jakarta", sekolah: "Universitas X", tahunLulus: 2018},
  { nama: "Sukri", umur: 10, asal: "ahsdsakdasld", sekolah: "Universitas X", tahunLulus: 20234},
]

try {
  tampilkanBiodata(readAndWriteData(siswa), app.VERSION, app.AUTHOR)
} catch (err) {
  console.log(err.message)
}
