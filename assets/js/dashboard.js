const hour = new Date().getHours();
let sapaan = "";

if (hour >= 4 && hour < 11) {
    sapaan = "Selamat Pagi";
} else if (hour >= 11 && hour < 15) {
    sapaan = "Selamat Siang";
} else if (hour >= 15 && hour < 18) {
    sapaan = "Selamat Sore";
} else {
    sapaan = "Selamat Malam";
}

document.getElementById('greeting').innerText = `${sapaan}, Admin!`;