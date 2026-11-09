# UTS Pemrograman Web - Sistem Informasi Manajemen & Katalog Buku

Proyek ini adalah aplikasi berbasis web front-end yang dikembangkan sebagai tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web. Aplikasi ini berfungsi sebagai prototipe purwarupa (mock-up) untuk sistem manajemen toko buku yang mencakup fitur autentikasi sederhana, pengelolaan stok/katalog, dan pelacakan pengiriman (tracking).

👨‍💻 Identitas Pengembang

Nama: Ariq Firmansyah

NIM: 312510176

Program Studi: S1 Teknik Informatika

✨ Fitur Utama

Sistem Login (Mock-up): Validasi kredensial pengguna berdasarkan data statis menggunakan JavaScript murni.

Katalog & Stok Buku Dinamis: Tabel katalog buku yang dirender secara dinamis dari file JSON (data.js) menggunakan DOM Manipulation, lengkap dengan tampilan gambar sampul (cover).

Pelacakan Pengiriman (Tracking): Fitur untuk melacak status dan riwayat perjalanan paket berdasarkan Nomor Delivery Order (DO).

Desain UI/UX Modern: Antarmuka responsif dengan tema Dark Mode menggunakan HTML5 dan CSS3.

📂 Struktur Folder

Proyek ini mengedepankan modularitas dan kerapian kode dengan memisahkan struktur (HTML), desain (CSS), dan logika (JavaScript) ke dalam folder yang berbeda:

UTS_PEMOGRAMAN/
│
├── assets/
│   ├── css/
│   │   └── style.css          # Gaya visual utama (Dark Mode)
│   └── js/
│       ├── checkout.js        # Logika halaman checkout
│       ├── dashboard.js       # Logika sapaan dinamis dashboard
│       ├── data.js            # Basis data terpusat (JSON Array & Object)
│       ├── login.js           # Logika validasi login
│       ├── stok.js            # Manipulasi DOM untuk render tabel & gambar
│       └── tracking.js        # Logika pencarian data resi pengiriman
│
├── img/                       # Direktori penyimpanan aset gambar (cover buku)
│   ├── kepemimpinan.jpg
│   ├── manajemen_keuangan.jpg
│   ├── mikrobiologi.jpg
│   ├── paud_perkembangan.jpg
│   └── pengantar_komunikasi.jpg
│
├── checkout.html
├── dashboard.html
├── login.html                 # Halaman utama (Entry Point)
├── stok.html
└── tracking.html


🚀 Cara Menjalankan Proyek

Karena proyek ini menggunakan pemanggilan file eksternal (CSS dan JS) dengan metode Relative Path (./), disarankan untuk membukanya menggunakan server lokal agar fitur berjalan optimal.

Buka folder proyek (UTS PEMOGRAMAN) di Code Editor seperti Visual Studio Code.

Pastikan Anda sudah menginstal ekstensi Live Server.

Klik kanan pada file login.html, lalu pilih "Open with Live Server".

Gunakan kredensial berikut untuk menguji fitur login:

Email: siti@gmail.com

Password: siti123

(Atau gunakan akun custom: admin@xstore.com / 123)

🛠️ Teknologi yang Digunakan

HTML5: Struktur semantik web.

CSS3: Styling antarmuka (Vanilla CSS tanpa framework tambahan).

JavaScript (ES6): Manipulasi DOM, filter data, dan interaktivitas halaman (Vanilla JS).
