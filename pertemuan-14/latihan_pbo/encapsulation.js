class Person {
  #age

  constructor(name, age) {
    this.name = name
    this.#age = age
  }

  getAge() {
    return this.#age
  }
  setAge(newAge) {
    return newAge < 0 || newAge > 150 ? 'Umur tidak valid' : this.#age = newAge
  }
}

let orang = new Person('John', 25)
console.log(orang.name)
console.log(orang.getAge())
console.log(orang.setAge(220))
console.log(orang.getAge())
