console.log("|-----------------------|\n Operator Kondisional / Logika\n|-----------------------|")

const nilai = 85

const result = nilai >= 0 && nilai <= 40 ? "C" : 
                nilai >= 41 && nilai <= 65 ? "B" : 
                  nilai >= 66 && nilai <= 85 ? "A" : "S"

console.log("nilai:", nilai)

console.log(result)

let hari = 6
let namaHari

switch (hari) {
  case 1:
    namaHari = "senin"
    break;

  case 2:
    namaHari = "selasa"
    break;

  case 3:
    namaHari = "rabu"
    break;

  case 4:
    namaHari = "kamis"
    break;

  case 5:
    namaHari = "jum'at"
    break;

  case 6:
    namaHari = "sabtu"
    break;

  case 7:
    namaHari = "minggu"
    break;

  default:
    namaHari = "nama hari tidak tersedia"
    break;
}

console.log(hari, namaHari)
