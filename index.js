// let a = 2
// let b = "2"
// let c = 3
//
// let d = a == b
// let e = c > b
// let f = b === a
// let g = b > c
//
// let h = d && e && (f || g)
//
// console.log(d, e, f, g, h)

let a = 20
let b = 3
let c = 4

let d = a % b
let e = (a + b) % (c + b)
let f = a / b

let g = (d * e / f) % b

console.log(d, e, f, g)

// const myFunc = () => "my function"
//
// console.log(myFunc())

let key = "white_rabbit"

if (key) {
  console.log(true)
  key = "ginger_rabbit"
}
console.log(key)
