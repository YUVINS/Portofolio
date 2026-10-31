# Portofolio Interaktif - Kelvin Alexander

Portofolio web resmi untuk **Kelvin Alexander** (Mahasiswa Sistem Informasi UMN - *Data & ERP Enthusiast*).

---

## 🚀 Fitur Utama
- **Desain Modern Dark-Gold Theme**: Senada dengan template CV Canva (aksen amber/gold, slate-900, glassmorphism, dan clean typography).
- **Interactive Project Filtering**: Pengunjung dapat memfilter proyek berdasarkan kategori (*Semua, SAP & ERP, Data & Machine Learning, Fiori & Web*).
- **Interactive Project Modal (Pop-up)**: Membuka studi kasus mendalam lengkap dengan latar belakang masalah bisnis, langkah implementasi teknis, dan dampak terukur.
- **Interactive Skills Matrix**: Menampilkan penguasaan SAP S/4HANA (MM, SD), SAP Fiori Elements, OData, Python, Machine Learning, MySQL, Power BI, dan Tableau.
- **One-Click Email Copy & Direct WhatsApp Link**: Memudahkan rekruter untuk langsung menghubungi kandidat.
- **Zero Build Step**: Menggunakan HTML5, Tailwind CSS via CDN, dan Vanilla JavaScript murni. Cukup buka `index.html` langsung jalan di browser apapun!

---

## 💻 Cara Menjalankan Secara Lokal

### Cara 1 (Paling Mudah):
Cukup klik ganda (*double-click*) file `index.html` di dalam folder ini untuk langsung membukanya di browser (Chrome, Edge, Firefox, dll).

### Cara 2 (Dengan Local Server):
Jalankan salah satu perintah ini di terminal PowerShell pada folder `C:\Users\Kelvin\portfolio`:

```powershell
# Opsi A: Menggunakan Python
python -m http.server 3000

# Opsi B: Menggunakan npx serve
npx serve .
```
Lalu buka browser di `http://localhost:3000`.

---

## 🌐 Cara Deploy Gratis ke GitHub Pages (Hanya 2 Menit)

1. Buka akun **GitHub** kamu dan buat *Repository* baru bernama:
   `portfolio` atau `kelvinalexander.github.io` (Public).
2. Di PowerShell pada folder `C:\Users\Kelvin\portfolio`, jalankan:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<USERNAME-KAMU>/portfolio.git
   git push -u origin main
   ```
3. Di halaman repository GitHub kamu:
   * Masuk ke menu **Settings** > **Pages**.
   * Di bagian **Branch**, pilih `main` dan folder `/ (root)`.
   * Klik **Save**.
4. Website kamu langsung aktif dan bisa diakses dunia di URL:
   `https://<USERNAME-KAMU>.github.io/portfolio/`

---

## 📁 Struktur File
```text
portfolio/
├── index.html        # Kerangka halaman, komponen UI, & modal pop-up
├── style.css         # Styling khusus, custom scrollbar, & glassmorphism
├── app.js            # Data proyek interaktif, filter logic, & clipboard helper
├── assets/
│   └── profile.png   # Foto profil resmi Kelvin Alexander
└── README.md         # Panduan penggunaan & deployment
```
