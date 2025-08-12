const app = require('./config/aplikasi.js')
const readAndWriteData = require('./data/siswa.js')
const tampilkanBiodata = require('./logic/tampilkanBiodata.js')
const logikaKategori = require('./logic/logikaKategori.js')

let siswa = [
  { nama: "Richard", umur: 30, asal: "Jakarta", sekolah: "Universitas X", tahunLulus: 2018},
]

try {
  let kategori = logikaKategori(siswa[0].tahunLulus)
  tampilkanBiodata(siswa[0].nama, siswa[0].umur, siswa[0].asal, siswa[0].sekolah, siswa[0].tahunLulus, kategori, app.VERSION, app.AUTHOR)
  // TODO: get data from the readAndWriteData func
  // readAndWriteData(siswa)
  // let logika = logikaKategori(siswa[0].tahunLulus)
  // tampilkanBiodata(siswa[0].nama, siswa[0].umur, siswa[0].asal, siswa[0].sekolah, siswa[0].tahunLulus, kategori, app.VERSION, app.AUTHOR)
} catch (err) {
  console.log(err.message)
}
