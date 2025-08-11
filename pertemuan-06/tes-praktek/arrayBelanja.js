let daftar = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 },
]

const belanja = (pembayaran, daftar) => {
  daftar.forEach((el, i) => {
    console.log(`${i + 1}. ${el.nama} - ${el.harga}`)
    total += el.harga
  }, total = 0)

  let diskon = total < 250000 ? 0 : total < 500000 ? 5 : total < 800000 ? 10 : 15
  let setelahDiskon = total - (total * diskon / 100)
  let hasil = pembayaran - setelahDiskon

  console.log("====== Rincian Belanja Sepatu =====")
  console.log(`Total Belanja = Rp. ${total}`)
  console.log(`Diskon = ${diskon}%`)
  console.log(`Total Setelah Diskon = Rp. ${setelahDiskon}`)
  console.log(`Pembayaran = Rp. ${pembayaran}`)
  console.log(`Kembalian = Rp. ${hasil}`)
}

belanja(1200000, daftar)
