let tinggi = [
  { nama: "Rose", t: 178 },
  { nama: "Magnolia", t: 153 },
  { nama: "Daisy", t: 165 },
  { nama: "Jasmine", t: 161 },
  { nama: "Violet", t: 159 },
]

for (const [key, value] in tinggi) {
  console.log(`${tinggi[key].nama} memiliki tinggi ${tinggi[key].t} cm`)
}
