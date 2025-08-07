const a = 20
const b = 3

console.log("|-----------------------|\n Operator Aritmatika\n|-----------------------|")

console.log("Penjumlahan: ", a + b)
console.log("Pengurangan: ", a - b)
console.log("Perkalian: ", a * b)
console.log("Pembagian: ", a / b)
console.log("Sisa Bagi: ", a % b)
console.log("Pangkat: ", a ** b)

console.log("|-----------------------|\n Operator Assignment\n|-----------------------|")

let x = 10
console.log("x =", x)

console.log("x + 2 =", x += 2)
console.log("x - 2 =", x -= 2)
console.log("x / 2 =", x /= 2)
console.log("x * 2 =", x *= 2)
console.log("x % 2 =", x %= 2)
console.log("x ** 2 =", x **= 2)

console.log("|-----------------------|\n Operator Perbandingan\n|-----------------------|")

const d = 10
const e = '10'
const f = 5
console.log("d:", d)
console.log("e:", e)
console.log("f:", f)

console.log("d == e:", d == e)
console.log("d === e:", d === e)

console.log("d != e:", d != e)
console.log("d !== e:", d !== e)

console.log("d > f:", d > f)
console.log("d < f:", d < f)
console.log("d >= 10:", d >= 10)
console.log("f <= 5:", f <= 5)

console.log("|-----------------------|\n Operator Kondisional / Logika\n|-----------------------|")

const nilai = 85
const lulus = nilai >= 75
const hadir = true

const result = lulus && hadir ? "Siswa lulus dan hadir." : lulus && !hadir ?
                "Siswa lulus tapi tidak hadir" : lulus || hadir ? 
                  "Siswa dianggap aktif." : "Siswa jahat >:("

console.log("nilai:", nilai)
console.log("lulus:", lulus)
console.log("hadir:", hadir)

console.log(result, "\nTidak hadir:", !hadir)

// if (lulus && hadir) {
//   console.log("Siswa lulus dan hadir.")
// } else {
//   console.log("Siswa tidak lulus tapi hadir")
// }
//
// if (lulus || hadir) {
//   console.log("Siswa dianggap aktif.")
// } else {
//   console.log("Siswa tidak aktif")
// }
//
// console.log("Tidak hadir:", !hadir)
