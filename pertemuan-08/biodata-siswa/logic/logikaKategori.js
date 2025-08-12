const logikaKategori = (tahunLulus) => {
  return tahunLulus < 2019 ? "Lulus Sebelum Covid" : tahunLulus < 2022 ? "Lulus Saat Covid" : "Lulus Setelah Covid"
}

module.exports = logikaKategori
