const readAndWriteData = (siswa) => {
  const fs = require("fs")
  const path = require("path")

  const filePath = path.resolve(__dirname, 'data.json')
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
  data.push(...siswa)

  fs.writeFileSync(filePath, JSON.stringify(data))
  console.log("Data berhasil ditambahkan dan disimpan ulang")
  return data
}

module.exports = readAndWriteData
