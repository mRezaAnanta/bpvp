const fs = require("fs")
const path = require("path")

// FIX: error no such file or dir
const filePath = path.resolve(__dirname, 'data.json')
// console.log(filePath)
const teks = fs.readFileSync(filePath, "utf-8")
const data = JSON.parse(teks)
console.log(`Isi Awal: ${JSON.stringify(data)}`)

data.push({ id: 4, nama: "Jeremy", usia: 28 })
// console.log(data)

// for (const key in data) {
//   console.log(data[key].nama)
// }

 fs.writeFileSync(filePath, JSON.stringify(data))

 console.log("Data berhasil ditambahkan dan disimpan ulang")
 console.log(`Isi Akhir: ${JSON.stringify(data)}`)
