const showBiodata = (nama, umur, asal, sekolah, tahunLulus, kategoriKondisi, version, author) => {
  console.log("=== BIODATA SISWA ===")
  console.log(`Nama             : ${nama}`)
  console.log(`Umur             : ${umur} tahun`)
  console.log(`Asal             : ${asal}`)
  console.log(`Sekolah          : ${sekolah}`)
  console.log(`Tahun Lulus      : ${tahunLulus}`)
  console.log(`Kategori Kondisi : ${kategoriKondisi}\n`)

  console.log("=== INFO APLIKASI ===")
  console.log(`Versi            : ${version}`)
  console.log(`Penanggung Jawab : ${author}`)
}

module.exports = showBiodata
