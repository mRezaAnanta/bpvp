// Aritmatika
console.log("|-----------------------|\n Aritmatika\n|-----------------------|")
let a = 150
let b = 40

console.log("a:", a)
console.log("b:", b)
console.log("Penjumlahan: ", a + b)
console.log("Pengurangan: ", a - b)
console.log("Perkalian: ", a * b)
console.log("Pembagian: ", a / b)
console.log("Sisa Bagi: ", a % b)
console.log("Pangkat: ", a ** b)

console.log("|-----------------------|\n Assignment\n|-----------------------|")

let x = 35
console.log("x =", x)

console.log("x + 5 =", x += 5)
console.log("x - 2 =", x -= 2)
console.log("x * 3 =", x *= 3)
console.log("x / 2 =", x /= 2)

console.log("|-----------------------|\n Perbandingan\n|-----------------------|")

const c = 10
const d = '10'

console.log("c:", c)
console.log("d:", d)

console.log("c == d:", c == d)
console.log("c === d:", c === d)

console.log("c != d:", c != d)
console.log("c !== d:", c !== d)

console.log("c > 5:", c > 5)
console.log("c <= 10:", c <= 10)

console.log("|-----------------------|\n Kondisional / Logika\n|-----------------------|")

let umur = 20
let punyaKTP = true

console.log("umur:", umur)
console.log("punyaKTP:", punyaKTP)
console.log("Boleh buat SIM?", umur >= 17 && punyaKTP)
console.log("Remaja atau dewasa?", umur >= 13 || umur >= 20)
console.log("Bukan anak-anak?", !(umur < 13))
