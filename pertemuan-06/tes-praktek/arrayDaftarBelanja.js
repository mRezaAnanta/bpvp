let daftarBelanja = []
let tambahan = ["Telur", "Sayur", "Buah"]
daftarBelanja.push("Beras", "Minyak", "Gula")
daftarBelanja.push(...tambahan)

daftarBelanja.splice(daftarBelanja.indexOf("Minyak"), 1)

daftarBelanja.sort().forEach((el, i) => console.log(`${i+1}. ${el}`))
