class Car {
  constructor(brand, factory) {
    this._carname = brand
    this._factory = factory
  }
  get carname() {
    return this._carname
  }
  set carname(namaBaru) {
    this._carname = namaBaru
  }
  get factory() {
    return this._factory
  }
  set factory(namaBaru) {
    this._factory = namaBaru
  }
}

let newcar = new Car('Pajero', 'Mitsubishi')
newcar.carname = 'Alphard'
newcar.factory = 'Toyota'
console.log(newcar.carname)
console.log(newcar.factory)
