const readAndWriteData = (siswa) => {
  const fs = require("fs")
  const path = require("path")

  const filePath = path.resolve(__dirname, 'data.json')
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  console.log(`Isi Awal: ${JSON.stringify(data)}`)

  // data.push(...lulus)
  //
  // fs.writeFileSync(filePath, JSON.stringify(data))

  console.log("Data berhasil ditambahkan dan disimpan ulang")
  console.log(JSON.stringify(data))
}

module.exports = readAndWriteData
