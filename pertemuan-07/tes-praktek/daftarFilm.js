const fs = require("fs")
const path = require("path")

let film = [
  { nama: "Agak Laen", tahun: 2024, genre: ["Horror", "Komedi"]},
  { nama: "Habibie & Ainun", tahun: 2012, genre: ["Drama", "Romantis"]},
  { nama: "Dilan 1990", tahun: 2018, genre: ["Romantis"]},
]

const filePath = path.resolve(__dirname, 'film.json')
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
console.log(`Isi Awal: ${JSON.stringify(data)}`)

data.push(...film)

fs.writeFileSync(filePath, JSON.stringify(data))

console.log("Data berhasil ditambahkan dan disimpan ulang")
console.log("Daftar Film:")

data.forEach((el, i) => {
  console.log(`${i + 1}. ${el.nama} (${el.tahun}) - ${el.genre}`)
})
