# Sistem Informasi Sekolah Berbasis Web pada SD Islam Al-Hikmah

## Identitas Mahasiswa

- **Nama Mahasiswa:** Nyssa Leilani Calista
- **NIM:** 25091397062
- **Kelompok:** B03
- **Mata Kuliah:** Pemrograman Web
- **Jenis Tugas:** Ujian Tengah Semester (UTS)

## 1. Deskripsi Proyek

Proyek ini merupakan pembuatan website Sistem Informasi Sekolah Berbasis Web pada SD Islam Al-Hikmah. Website ini dibuat sebagai penerapan materi yang telah dipelajari dalam mata kuliah Pemrograman Web, khususnya dalam pembuatan halaman web, pengaturan tampilan, navigasi, serta interaksi dengan pengguna.

Website dirancang untuk menampilkan informasi sekolah melalui halaman utama dan halaman berita sekolah. Selain itu, terdapat fitur untuk melihat detail berita dan formulir yang dapat digunakan untuk menambahkan berita baru. Dengan adanya fitur tersebut, pengguna dapat melihat informasi yang tersedia dan mencoba menambahkan konten berita melalui website.

## 2. Tujuan Pembuatan

Tujuan pembuatan website ini adalah menerapkan konsep pengembangan web menggunakan HTML, CSS, JavaScript, jQuery, dan AJAX. Melalui proyek ini, saya mempelajari cara menyusun struktur halaman, mengatur tampilan agar lebih rapi, membuat navigasi ant halaman, serta menambahkan interaksi dan validasi pada formulir.

Website ini juga dibuat untuk memberikan contoh sederhana bagaimana informasi sekolah dapat disajikan melalui sebuah halaman web yang mudah digunakan.

## 3. Fitur Website

### a. Halaman Utama

Halaman utama merupakan halaman awal yang menampilkan pengenalan website sekolah. Halaman ini dilengkapi dengan navigasi untuk membantu pengguna berpindah ke bagian berita sekolah maupun formulir tambah berita.

### b. Halaman Berita Sekolah

Halaman berita sekolah menampilkan beberapa contoh berita yang berkaitan dengan kegiatan dan informasi pendidikan. Setiap berita dilengkapi dengan judul, tanggal, ringkasan isi, dan tombol untuk membaca detailnya.

### c. Detail Berita

Fitur detail berita digunakan untuk menampilkan isi berita secara lebih lengkap ketika pengguna menekan tombol **Baca detail**. Fitur ini dibuat menggunakan JavaScript dan jQuery agar dapat merespons tindakan pengguna.

### d. Formulir Tambah Berita

Formulir tambah berita digunakan untuk memasukkan berita baru. Kolom yang tersedia meliputi judul berita, tanggal, nama file gambar secara opsional, dan isi berita. Formulir ini memungkinkan pengguna mencoba menambahkan konten berita ke halaman website.

### e. Validasi Formulir

Validasi dilakukan sebelum data disimpan. Judul berita harus terdiri dari 5–200 karakter, tanggal wajib diisi, dan isi berita harus memiliki minimal 20 karakter. Jika data belum sesuai, website menampilkan pesan agar pengguna memperbaiki bagian yang masih salah.

### f. Penyimpanan Berita

Berita yang berhasil melewati validasi disimpan menggunakan `localStorage`. Data yang tersimpan dapat ditampilkan pada halaman Berita Sekolah melalui browser yang sama. Penyimpanan ini masih bersifat lokal dan belum menggunakan database pada server.

### g. Navigasi Menggunakan AJAX

Navigasi halaman berita dan formulir tambah berita menggunakan AJAX dengan bantuan jQuery. Dengan cara ini, konten halaman dapat dimuat ke bagian utama website tanpa harus memuat ulang seluruh halaman.

### h. Tampilan Responsif

Tampilan website diatur menggunakan CSS agar elemen halaman, menu, kartu berita, dan formulir dapat menyesuaikan ukuran layar. Tujuannya agar website tetap nyaman dilihat pada ukuran layar yang berbeda.

## 4. Teknologi yang Digunakan

Teknologi yang digunakan dalam pembuatan website ini meliputi:

- **HTML5**, untuk menyusun struktur dan konten halaman website.
- **CSS3**, untuk mengatur warna, tata letak, ukuran elemen, dan tampilan responsif.
- **JavaScript**, untuk menambahkan interaksi dan proses validasi data.
- **jQuery**, untuk mempermudah pengelolaan elemen HTML dan penanganan tindakan pengguna.
- **AJAX**, untuk memuat konten halaman secara dinamis.
- **localStorage**, untuk menyimpan data berita pada browser.
- **Visual Studio Code**, sebagai editor untuk menulis dan mengelola kode program.
- **Live Server**, untuk menjalankan dan menguji website selama proses pengembangan.

## 5. Cara Menjalankan Website

Untuk menjalankan website, langkah-langkah yang dilakukan adalah sebagai berikut:

1. Membuka folder proyek menggunakan Visual Studio Code.
2. Memastikan ekstensi Live Server telah terpasang.
3. Membuka file `index.html`.
4. Mengklik kanan file tersebut dan memilih **Open with Live Server**.
5. Website akan terbuka pada browser.
6. Menggunakan menu navigasi untuk mengakses halaman utama, berita sekolah, dan formulir tambah berita.

## 6. Cara Menggunakan Fitur Tambah Berita

Untuk mencoba fitur tambah berita, pengguna dapat mengikuti langkah berikut:

1. Membuka menu **Tambah Berita Sekolah**.
2. Mengisi judul berita dengan panjang 5–200 karakter.
3. Memilih tanggal berita.
4. Mengisi isi berita minimal 20 karakter.
5. Mengisi nama file gambar jika diperlukan. Kolom ini hanya menerima nama file dan belum mengunggah gambar.
6. Menekan tombol **Validasi dan Simpan Berita**.
7. Jika data memenuhi ketentuan, berita akan disimpan pada `localStorage`.
8. Membuka menu **Berita Sekolah** untuk melihat berita yang telah ditambahkan.

## 7. Batasan Proyek

Pada versi yang dibuat saat ini, data berita masih disimpan menggunakan `localStorage` pada browser. Artinya, data belum dikirim ke server dan belum tersimpan dalam database MySQL. Data juga tidak otomatis tersedia pada browser atau perangkat lain.

Selain itu, kolom nama file gambar masih berupa input teks dan belum memiliki fungsi untuk mengunggah serta menampilkan gambar. Oleh karena itu, website ini masih merupakan implementasi awal yang berfokus pada tampilan, navigasi, validasi formulir, dan penyimpanan berita secara lokal.

## 8. Penutup

Melalui pengerjaan proyek ini, saya menerapkan beberapa konsep dasar Pemrograman Web, mulai dari menyusun struktur HTML, mengatur tampilan dengan CSS, hingga menambahkan interaksi menggunakan JavaScript dan jQuery. Saya juga mempelajari penggunaan AJAX untuk memuat konten halaman serta `localStorage` untuk menyimpan data berita pada browser.

Proyek ini menjadi latihan dalam menggabungkan beberapa teknologi web ke dalam satu website yang saling terhubung. Ke depannya, website masih dapat dikembangkan dengan menambahkan backend dan database agar pengelolaan informasi sekolah dapat dilakukan secara lebih terstruktur.
