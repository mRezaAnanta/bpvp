class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`
  }
}

let person1 = new Person("Alice", 30)
console.log(person1.say())
