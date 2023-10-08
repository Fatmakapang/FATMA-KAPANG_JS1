// If else

let rata = 80;

if (rata <= 70) {
  console.log("Naik Kelas");
} else {
  console.log("Tidak Naik Kelas");
}


//nested if

let tugas = 90;
let kehadiran= 80;

if (tugas <= 90) {
  if (kehadiran <= 80) {
    console.log("Tidak Lulus");
  } else {
    console.log("Tidak Lulus karena Kehadiran Kurang");
  }
} else {
  console.log("Lulus");
}


//Switch Case

let hari = "Senin";

switch (hari) {
    case "Senin":
    case "Selasa":
    case "Rabu":
    case "Kamis":
    case "Jumat":
    console.log("Hari Masuk Belajar Di Infinite Learning");
        break;
    case "Sabtu":
    case "Minggu":
    console.log("Hari libur");
    break;
default:
    console.log("Hari tidak valid");
}


//Fot Statement

for (let n = 1; n <= 7; n++) {
    console.log("Hari Ke-" + n);
}


//While Loop

let n = 1;

while (n <= 7) {
  console.log("Tanggal Ke-" + n);
  n++;
}


//do While Loop

let number = 8;

do {
  console.log("Nomor ke-" + number);
  number++;
} while (number <= 5);


//Function

function kali(a, b) {
    return a * b;
}
let hasil = kali (100, 100);
console.log("Perkalian = " + hasil);

