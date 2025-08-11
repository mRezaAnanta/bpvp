console.log("=== array 1 dimensi ===")
let contoh = [24, 25, 10]
console.log(contoh[1])

console.log("=== array 2 dimensi ===")
let contoh2 = [
  [32, 84, 12], 
  [82, 62, 72]
]
console.log(contoh2[1][2])

console.log("=== array of object ===")
let contoh3 = [
  {
    nama: "Ahmad",
    umur: 29,
    hobi: "olahraga",
  },
  {
    nama: "Zaidan",
    umur: 22,
    hobi: "ngoding",
  }
]

console.log(contoh3[0].nama)
console.log(contoh3[1].umur)

console.log("=== array pengulangan ===")
console.log("=== metode forEach ===")
let angka = [10, 20, 30]

angka.forEach((nilai, index) => {
  console.log(`Index ke-${index}: ${nilai}`)
})

console.log("=== metode map ===")
let angkaMap = [1, 2, 3]
let kuadrat = angkaMap.map(nilai => nilai * nilai)
console.log(kuadrat)

console.log("=== metode filter ===")
let angkaFilter = [70, 80, 45, 90]
let lulus = angkaFilter.filter(nilai => nilai >= 75)
console.log(lulus)

console.log("=== menambah/menghapus elemen array ===")
let arr = [1, 2, 4, 5]
arr.splice(2, 0, 3)
console.log(arr)

let arr1 = [1, 2, 3, 4, 5]
arr.splice(2, 2)
console.log(arr)

let arr2 = [1, 2, 3, 4, 5]
let potong = arr.slice(1, 4)
console.log(potong)
console.log(arr)

console.log("=== mengurut array ===")
let nama = ["Emily", "Mark", "Ashley", "James"]
nama.sort()
console.log(nama)

let nilai = [40, 100, 1, 5, 25, 10]
nilai.sort((a, b) => b - a)
console.log(nilai)

nilai.sort((a, b) => a - b)
console.log(nilai)

let siswa = [
  { nama: "Ali", nilai: 85 },
  { nama: "Budi", nilai: 92 },
  { nama: "Cici", nilai: 75 },
]

siswa.sort((a, b) => b.nilai - a.nilai)
console.log(siswa)
