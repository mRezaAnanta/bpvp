const logikaKategori = require('./logikaKategori.js')

const showBiodata = (data, version, author) => {
  data.forEach((el, i) => {
    console.log(`=== BIODATA SISWA ${i + 1} ===`)
    console.log(`Nama             : ${el.nama}`)
    console.log(`Umur             : ${el.umur} tahun`)
    console.log(`Asal             : ${el.asal}`)
    console.log(`Sekolah          : ${el.sekolah}`)
    console.log(`Tahun Lulus      : ${el.tahunLulus}`)
    console.log(`Kategori Kondisi : ${logikaKategori(el.tahunLulus)}\n`)
  })

  console.log("=== INFO APLIKASI ===")
  console.log(`Versi            : ${version}`)
  console.log(`Penanggung Jawab : ${author}`)
}

module.exports = showBiodata
