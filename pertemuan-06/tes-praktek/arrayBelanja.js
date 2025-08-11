let arr = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 },
]

console.log("====== Rincian Belanja Sepatu =====")
arr.forEach((el, i) => {
  console.log(`${i + 1}. ${el.nama} - ${el.harga}`)
})

let total = 0
arr.map(x => x.harga).forEach(el => total += el)
console.log(`Total Belanja = Rp. ${total}`)

let diskon = total < 250000 ? 0 : total < 500000 ? 5 : total < 800000 ? 10 : 15
console.log(`Diskon = ${diskon}%`)

let setelahDiskon = total - (total * diskon / 100)
console.log(`Total Setelah Diskon = Rp. ${setelahDiskon}`)

let pembayaran = 1200000
console.log(`Pembayaran = Rp. ${pembayaran}`)

let hasil = pembayaran - setelahDiskon
console.log(`Kembalian = Rp. ${hasil}`)
