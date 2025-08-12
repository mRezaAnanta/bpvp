const logikaKategori = (tahunLulus) => {
  return `Lulus ${tahunLulus < 2019 ? "Sebelum" : tahunLulus < 2022 ? "Saat" : "Setelah"} Covid`
}

module.exports = logikaKategori
