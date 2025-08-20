// ABSTRACTION && ENCAPSULATION
class Car {
  constructor (brand, kecepatan) {
    this._carname = brand
    this._speed = kecepatan
  }
  sound(suara) {
    return suara + " vrooom...."
  }
  get carname() {
    return this._carname
  }
  set carname(namaBaru) {
    this._carname = namaBaru
  }
  static hello() {
    return "Hello, ini adalah static method"
  }
  info() {
    console.log(`Mobil ${this.carname} memiliki kecepatan ${this._speed} km/jam`)

    if (this._speed > 0) {
      console.log("Mobil sedang berjalan")
    } else {
      console.log("Mobil sedang berhenti")
    }
  }
  get speed() {
    return this._speed
  }
  set speed(kecepatanBaru) {
    this._speed = kecepatanBaru
  }
}

console.log("=== ABSTRACTION && ENCAPSULATION ===")
let pajero = new Car('Mitsubishi', 80)
console.log(pajero.sound("Hello"))
console.log(pajero.carname)
console.log(pajero.speed)
pajero.info()
pajero.speed = 0
console.log(pajero.speed)
pajero.info()
pajero.carname = "Alphard"
console.log(pajero.carname)
console.log(Car.hello())

// INHERITANCE
class Parent {
  constructor(greeting) {
    this.greeting = greeting
  }

  parentSay() {
    console.log(`${this.greeting} this is the parent class.`)
  }
}

class Child extends Parent {
  constructor(greeting, name) {
    super(greeting)
    this.name = name
  }

  childSay() {
    console.log(`${this.greeting}, ${this.name} this is the child class`)
  }
}

let parent1 = new Parent("Hello")
parent1.parentSay()

let child1 = new Child("Hey", "Mark")
child1.childSay()

// POLYMORPHISM
// OVERRIDE
class Vehicle {
  sound() {
    console.log("This vehicle makes a sound.")
  }
}

class Truck extends Vehicle {
  sound() {
    console.log("Honk Hoooooonk!")
  }
}

class Bike extends Vehicle {
  sound() {
    console.log("Ring ring!")
  }
}

console.log("=== POLYMORPHISM ===")
console.log("=== OVERRIDE ===")
let vehicle1 = new Vehicle()
vehicle1.sound()
let vehicle2 = new Truck()
vehicle2.sound()
let vehicle3 = new Bike()
vehicle3.sound()

class TypeNumber {
  constructor(number) {
    this.number = number
    if (typeof number === "string") {
      this.keterangan = `Ini bukan angka, tapi string: ${number}`
    } else {
      this.keterangan = `Ini adalah angka: ${number}`
    }
  }
  info() {
    console.log(this.keterangan)
  }
}

console.log("=== OVERLOAD ===")
let number1 = new TypeNumber(20)
number1.info()
let number2 = new TypeNumber("20")
number2.info()

class Mobil {
  constructor(merek, kecepatan) {
    this.merek = merek
    this.kecepatan = kecepatan
  }
  info() {
    console.log(`Car brand: ${this.merek}`)
  }
  tambahKecepatan(nilai) {
    try {
      if (typeof nilai !== "number") {
        throw new Error("Kecepatan harus berupa angka!")
      }
      console.log(`Kecepatan awal: ${this.kecepatan} km/jam`)
      console.log(`Kecepatan sekarang: ${this.kecepatan += nilai} km/jam`)
    } catch (err) {
      console.log(`Terjadi kesalahan: ${err.message}`)
    }
  }
}

console.log("=== PACKAGE ===")
let mobilbaru = new Mobil("Mitsubishi", 50)
mobilbaru.info()
console.log("=== TRY CATCH ===")
mobilbaru.tambahKecepatan(8)
mobilbaru.tambahKecepatan(10)
