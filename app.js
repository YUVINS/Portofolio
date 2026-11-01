/**
 * Kelvin Alexander - Portfolio Application Logic
 * Interactive Filtering, Modal Showcase with Multi-Visual Gallery (Min. 3 Images per Project) & Fullscreen Zoom Lightbox
 */

// 1. Projects Data with 3 Real Visuals per Case Study & Professional Human-Friendly Language
const projects = [
  {
    id: 'sap-erp',
    category: 'erp',
    categoryLabel: 'S/4 HANA & ERP',
    year: '2024 – 2025',
    title: 'Konfigurasi End-to-End S/4 HANA (P2P & O2C)',
    subtitle: 'Simulasi Terpadu Alur Pengadaan Barang, Penjualan (Sales Order), & Integrasi Akuntansi Otomatis',
    summary: 'Menghubungkan proses bisnis pengadaan barang dari vendor hingga pembuatan pesanan penjualan pelanggan (Sales Order) pada sistem S/4 HANA, dilengkapi integrasi akuntansi keuangan otomatis di setiap tahap transaksi.',
    tags: [
      'S/4 HANA',
      'Sales & Distribution (SD)',
      'Materials Management (MM)',
      'Order-to-Cash (O2C)',
      'Sales Order (VA01)',
      'Integrasi Logistik & Keuangan (SD-FI)'
    ],
    problem: 'Dalam proses penjualan perusahaan berskala enterprise, sering terjadi risiko kesalahan input harga secara manual, keterlambatan verifikasi kuantitas stok di gudang, serta tidak sinkronnya pencatatan penjualan barang dengan jurnal pendapatan di departemen akuntansi keuangan. Proyek ini menyelesaikan masalah tersebut dengan membangun alur Order-to-Cash (O2C) terintegrasi pada sistem SAP S/4 HANA, sehingga penerbitan Sales Order langsung mereferensikan Quotation resmi, harga terhitung otomatis sesuai skema *Pricing Condition*, dan akun pendapatan tercatat otomatis tanpa intervensi manual.',
    steps: [
      '<strong>Penyusunan Struktur Organisasi Penjualan (SD) & Pengadaan (MM):</strong> Mengonfigurasi Sales Organization (US28), Distribution Channels (Wholesale / Internet), Divisions (Accessories & Bicycles), Sales Area, serta menetapkan Shipping Points (DL28, MI28, SD28) dan Purchasing Organization di SPRO.',
      '<strong>Pengaturan Master Data Pelanggan & Material Penjualan:</strong> Mendaftarkan Business Partner resmi pelanggan (Company 28 DC Bikes #1003053) lengkap dengan data Sales Area, serta memperluas data material (Elbow Pads, Road Helmet, Repair Kit, Off Road Helmet) dengan data tampilan Sales (Sales Views).',
      '<strong>Penetapan Skema Harga Jual & Integrasi Akuntansi (SD-FI):</strong> Mengatur skema kondisi harga (*Pricing Condition PR00*) via transaksi VK11 untuk Sales Org US28, serta memetakan akun pendapatan otomatis ke modul Finance (*Automatic Account Assignment of Revenue Elements*) dengan menyelesaikan kendala penguncian cost center (substitusi ke cost center aktif NAPL1028).',
      '<strong>Pembuatan Dokumen Pesanan Penjualan (Sales Order):</strong> Membuat dokumen pesanan resmi pelanggan (*Create Standard Order: Overview*) dengan mereferensikan dokumen penawaran harga (*Sales Quotation #20000008*), memverifikasi 4 item barang senilai total $3,509.00 USD, nomor referensi pelanggan (#1028), syarat pembayaran, serta tanggal pengiriman terjadwal (*Requested Delivery Date: 12/31/2025*).',
      '<strong>Eksekusi Pengiriman Logistik (Outbound Delivery & Picking):</strong> Menyiapkan surat jalan pengiriman resmi (*Outbound Delivery #80000007*), menentukan titik pengiriman (*Shipping Point*), dan mencatat instruksi pengambilan fisik barang di rak gudang (*picking*) untuk diberangkatkan ke Washington DC.',
      '<strong>Siklus Pelengkap Pengadaan Material (P2P):</strong> Menjalankan Purchase Order (PO #4500000003) hingga verifikasi penerimaan fisik material di gudang (Goods Receipt #5000000011) guna memastikan ketersediaan kuantitas stok barang di pabrik Miami (Plant MI28).'
    ],
    impact: 'Membuktikan keberhasilan implementasi siklus Order-to-Cash (O2C) dan Procure-to-Pay (P2P) yang saling terintegrasi penuh: meminimalkan human error pada pesanan pelanggan, memastikan konsistensi harga jual, dan menghasilkan pencatatan keuangan yang otomatis dan transparan.',
    visuals: [
      {
        src: 'assets/projects/sap_p2p_po.png',
        title: 'Bukti Penerimaan Barang di Gudang (Goods Receipt)',
        desc: 'Tangkapan layar alur penerimaan fisik barang pesanan (PO #4500000003) di gudang pabrik Miami (Plant MI28 / Storage Location TG28). Menampilkan verifikasi 5 material perlengkapan (Knee Pads, Elbow Pads, Road Helmet, Off Road Helmet, dan Repair Kit masing-masing 50 unit) hingga sistem resmi menerbitkan dokumen material sukses (Material Document #5000000011).'
      },
      {
        src: 'assets/projects/sap_o2c_so.png',
        title: 'Pembuatan Dokumen Pesanan Penjualan (Sales Order)',
        desc: 'Tangkapan layar dokumen pesanan resmi pelanggan (Create Standard Order: Overview) untuk customer Company 28 DC Bikes (#1003053) dengan referensi #1028. Sistem secara otomatis menghitung nilai total transaksi sebesar $3,509.00 USD untuk 4 jenis material pesanan (Elbow Pads, Road Helmet, Repair Kit, Off Road Helmet) serta menentukan jadwal pengiriman ke Washington DC.'
      },
      {
        src: 'assets/projects/sap_o2c_delivery.png',
        title: 'Surat Jalan & Pengambilan Barang (Delivery & Picking)',
        desc: 'Instruksi kerja bagi tim logistik untuk mengambil barang dari rak gudang (picking) berdasarkan pesanan pelanggan dan menyiapkan dokumen pengiriman resmi (Outbound Delivery #80000007) sebelum barang diberangkatkan.'
      }
    ]
  },
  {
    id: 'sap-fiori',
    category: 'fiori',
    categoryLabel: 'SAP Fiori & Web',
    year: '2025',
    title: 'SAP Fiori: Office Supply Expense Management',
    subtitle: 'Aplikasi Web Modern Pemantauan & Persetujuan Pengeluaran Operasional',
    summary: 'Membangun aplikasi web ramah pengguna berbasis SAP Fiori Elements yang memudahkan divisi kantor mengajukan anggaran perlengkapan kerja dan memantau status persetujuan secara real-time.',
    tags: ['SAP Fiori Elements', 'OData Service', 'ABAP Tables', 'Aplikasi Web'],
    problem: 'Pengajuan dan pencatatan belanja alat tulis kantor sebelumnya dilakukan manual dengan lembaran formulir atau spreadsheet terpisah. Hal ini memperlambat proses persetujuan dan membuat manajemen sulit mengontrol sisa anggaran tahunan.',
    steps: [
      '<strong>Perancangan Tabel Database:</strong> Menyusun struktur penyimpanan data di backend SAP (tabel ZEXPENSE_7, ZDEPARTMENT_7, ZOFFICE_SUPPLY) untuk mencatat data pengajuan, divisi pemohon, dan nominal biaya secara teratur.',
      '<strong>Pembangunan Jembatan Data (OData Service):</strong> Mengembangkan jalur komunikasi aman (API OData ZUMN_EXPENSE_SRV di transaksi SEGW) yang menghubungkan antarmuka web dengan pusat data SAP S/4 HANA.',
      '<strong>Pembuatan Antarmuka Web (Fiori Elements):</strong> Menggunakan standar antarmuka SAP modern (List Report) yang bersih, mudah digunakan di komputer maupun tablet, serta dilengkapi filter pencarian cepat.',
      '<strong>Fitur Pelacakan Status:</strong> Menampilkan status pengajuan (disetujui/Approved, ditolak/Rejected, atau dalam proses) agar setiap divisi mendapatkan kejelasan informasi tanpa harus menanyakan manual.'
    ],
    impact: 'Mengubah proses administrasi kantor yang tadinya manual menjadi digital, memangkas waktu tunggu verifikasi anggaran, serta memberikan visibilitas pengeluaran yang transparan bagi pimpinan.',
    visuals: [
      {
        src: 'assets/projects/fiori_ui_list.png',
        title: 'Halaman Utama Dasbor Pengeluaran (List Report Page)',
        desc: 'Tangkapan layar antarmuka asli aplikasi web SAP Fiori Elements (List Report). Menampilkan tabel daftar pengeluaran kantor secara real-time lengkap dengan kolom Divisi (Department D001-D004), Bulan, Status persetujuan (Approved), Kode Pasokan, Nominal Pengeluaran (Total Expense), serta filter pencarian instan.'
      },
      {
        src: 'assets/projects/fiori_ui_detail.png',
        title: 'Formulir Detail & Pengajuan Pengeluaran (Object Page)',
        desc: 'Tampilan formulir interaktif ketika pengguna mengajukan atau melihat rincian item belanja kantor (Expense Information). Menampilkan Transaction ID, nama Divisi, kode Pemasok (Supplier), jumlah barang (Quantity), harga satuan (Unit Price), tahun anggaran, serta status verifikasi.'
      },
      {
        src: 'assets/projects/fiori_arch_db.png',
        title: 'Arsitektur Data & Pemetaan OData Service (SEGW)',
        desc: 'Struktur teknis di balik layar yang menghubungkan antarmuka web Fiori dengan server database SAP S/4 HANA via OData Service agar data transaksi tersimpan aman dan akurat.'
      }
    ]
  },
  {
    id: 'pbi-dw',
    category: 'data',
    categoryLabel: 'Power BI & Data Warehouse',
    year: '2024',
    title: 'Implementasi Data Warehouse & Visualisasi Power BI',
    subtitle: 'Arsitektur Pipeline ETL, Pemodelan Snowflake Schema, & Dasbor Analitik Publikasi Ilmiah UMN',
    summary: 'Membangun arsitektur Data Warehouse berbasis Snowflake Schema sebagai Single Source of Truth (SSOT) untuk mengintegrasikan data publikasi dosen lintas fakultas di Universitas Multimedia Nusantara, dilengkapi dasbor interaktif Power BI untuk analisis tren dan kuartil Scopus.',
    tags: ['Power BI', 'Data Warehouse', 'Snowflake Schema', 'ETL Pipeline', 'DAX', 'Visualisasi Data'],
    problem: 'Data publikasi ilmiah dan profil dosen tersebar dalam format terpisah-pisah, memiliki inkonsistensi penamaan, serta sulit dipantau secara terpusat untuk kebutuhan akreditasi kampus dan evaluasi hibah riset.',
    steps: [
      '<strong>Desain Pipeline ETL 4-Tahap:</strong> Merancang alur Extract, Transform, Cleansing & Standardization, serta Conformed Dimensions guna menangani format duplikat dan data kosong.',
      '<strong>Pemodelan Skema Snowflake:</strong> Membangun tabel fakta (<em>FactPublication</em> & <em>FactPublicationAuthor</em>) yang terhubung relasional dengan tabel dimensi (<em>DimYear, DimStudyProgram, DimCiteScoreRank, DimVenue, DimFaculty</em>) untuk menangani relasi many-to-many publikasi dosen.',
      '<strong>Standardisasi Kuartil Scopus (Q1–Q4):</strong> Memetakan nilai CiteScore Percentile ke dalam kuartil resmi jurnal ilmiah guna standardisasi mutu akademik.',
      '<strong>Pengembangan Dasbor Interaktif Power BI:</strong> Merancang visualisasi tren volume publikasi, sebaran kuartil per fakultas, serta analisis kolaborasi riset interdisipliner.'
    ],
    impact: 'Menyediakan Single Source of Truth yang mempercepat verifikasi metrik riset kampus, mendukung pelaporan akreditasi program studi, serta menjadi dasar penetapan alokasi pendanaan penelitian dosen.',
    visuals: [
      {
        src: 'assets/projects/powerbi_pub_trend.png',
        title: 'Tren Volume Publikasi Ilmiah per Tahun & Kontribusi Program Studi',
        desc: 'Visualisasi interaktif Power BI yang memperlihatkan tren volume publikasi tahun 2021 hingga 2025 serta perbandingan produktivitas riset antar program studi di lingkungan UMN sebagai dasar evaluasi pendanaan riset.'
      },
      {
        src: 'assets/projects/powerbi_quartile_dist.png',
        title: 'Distribusi Kuartil Jurnal Scopus (Q1–Q4) per Fakultas',
        desc: 'Visualisasi sebaran publication share lintas fakultas (FB, FIKOM, FSD, FTI) berdasarkan kuartil jurnal CiteScore/Scopus, memetakan dominasi kuartil publikasi dan memandu strategi peningkatan ke Q2 dan Q1.'
      },
      {
        src: 'assets/projects/powerbi_collab_type.png',
        title: 'Komposisi & Rata-rata Kolaborasi per Jenis Publikasi Ilmiah',
        desc: 'Visualisasi diagram lingkaran (pie chart) yang mengukur rata-rata keterlibatan kolaborasi multi-dosen pada setiap jenis karya ilmiah, menunjukkan dominasi kolaborasi pada Article Journal (36.8%) dan Conference Paper (18.4%).'
      }
    ]
  },
  {
    id: 'tableau-datvis',
    category: 'data',
    categoryLabel: 'Tableau & Visual Analytics',
    year: '2024',
    title: 'Analisis Polusi Air & Dampak Kesehatan Publik Global (SDG 6)',
    subtitle: 'Studi Kasus Lingkungan Hidup, Akses Sanitasi, & Pemodelan Peramalan (Forecasting) Berbasis Tableau',
    summary: 'Merancang sistem visualisasi data dan dasbor analitik komprehensif menggunakan Tableau untuk menganalisis keterkaitan antara indeks kualitas air, cakupan sanitasi, dan beban penyakit diare di berbagai belahan dunia, dilengkapi forecasting tren prediktif hingga 2030.',
    tags: ['Tableau', 'Visualisasi Data', 'SDG 6', 'Interactive Dashboard', 'Geospatial Map', 'Forecasting'],
    problem: 'Krisis sanitasi dan polusi air berdampak langsung pada beban penyakit fatal (seperti diare dan mortalitas bayi), namun kompleksitas data multivariat global sulit dipahami oleh pemangku kebijakan jika hanya disajikan dalam bentuk tabel angka mentah.',
    steps: [
      '<strong>Pembersihan & Penyiapan Data Multivariat:</strong> Mengintegrasikan data indikator kualitas air (Kaggle/WHO), akses fasilitas kesehatan, dan angka morbiditas lintas negara ke dalam struktur terstandardisasi.',
      '<strong>Pemetaan Geospasial Interaktif (Mapbox):</strong> Membangun visualisasi peta tematik global untuk memetakan distribusi tingkat pencemaran air dan disparitas cakupan sanitasi di negara berkembang.',
      '<strong>Analisis Korelasi & Regresi:</strong> Mengidentifikasi hubungan linier antara paparan polusi air dengan lonjakan kasus diare melalui scatter plot dan garis tren regional.',
      '<strong>Peramalan Deret Waktu (Time-Series Forecasting):</strong> Mengimplementasikan pemodelan forecasting pada Tableau untuk memproyeksikan tren tekanan penyakit hingga tahun 2030 berdasarkan skenario perbaikan sanitasi.'
    ],
    impact: 'Menghasilkan dasbor analitik komprehensif yang mempermudah pembuat kebijakan mengidentifikasi wilayah defisit sanitasi tinggi dan menyusun intervensi kesehatan berbasis bukti (evidence-based policy).',
    visuals: [
      {
        src: 'assets/projects/tableau_water_risk.png',
        title: 'Dasbor Analisis Risiko Pencemaran Air & Beban Penyakit Global',
        desc: 'Tampilan antarmuka Tableau interaktif mencakup peta tematik Mapbox persebaran polusi air dunia, tren deret waktu peramalan (forecasting) risiko diare hingga 2030, scatter plot regresi polusi vs kasus penyakit, dan bobot risiko sanitasi.'
      },
      {
        src: 'assets/projects/tableau_health_access.png',
        title: 'Dasbor Aksesibilitas Fasilitas Kesehatan & Angka Kematian Bayi',
        desc: 'Visualisasi pemetaan tingkat akses layanan kesehatan global, Healthcare Deficit Index antar-kawasan regional, grafik deret waktu peramalan akses medis, serta korelasi bubble scatter plot antara fasilitas kesehatan dan Infant Mortality Rate.'
      },
      {
        src: 'assets/projects/tableau_sanitation_risk.png',
        title: 'Dasbor Analisis Cakupan Sanitasi Lingkungan & Mitigasi Diare Global',
        desc: 'Visualisasi geospasial cakupan sanitasi dunia, diagram korelasi kuat antara peningkatan fasilitas sanitasi terhadap penurunan drastis kasus diare, kontribusi risiko per negara, dan indeks defisit sanitasi regional.'
      }
    ]
  },
  {
    id: 'data-ml',
    category: 'data',
    categoryLabel: 'Data & Machine Learning',
    year: '2024 – 2025',
    title: 'Pemodelan Data Prediktif & Analisis Risiko',
    subtitle: 'Analisis Statistik, Pembobotan Teks, & Prediksi Tingkat Risiko Berbasis Data',
    summary: 'Mengolah data survei multi-parameter untuk memetakan tingkat risiko sanitasi dan akses air bersih, lalu melatih model Machine Learning agar mampu memprediksi potensi risiko secara akurat.',
    tags: ['VS Code', 'Machine Learning', 'Data Preprocessing', 'Random Forest'],
    problem: 'Banyak pengambil keputusan kesulitan menentukan daerah prioritas bantuan karena data yang tersedia sangat banyak, tersebar, dan bercampur antara angka statistik dan catatan teks narasi.',
    steps: [
      '<strong>Pembersihan & Standardisasi Data:</strong> Menangani data yang kosong, menyeragamkan format nilai, dan mengeliminasi data duplikat agar hasil analisis tidak bias.',
      '<strong>Pembuatan Indikator Kustom:</strong> Merumuskan skor perhitungan baru (seperti rasio ketersediaan air dan risiko sanitasi) untuk mencerminkan kondisi lapangan sebenarnya.',
      '<strong>Analisis Catatan Lapangan (TF-IDF):</strong> Mengekstraksi kata-kata penting dari catatan teks lapangan untuk menangkap konteks kendala fisik yang tidak tercatat di data angka.',
      '<strong>Pelatihan Model Komputer:</strong> Menguji algoritma Random Forest dan Decision Tree untuk menemukan model yang paling pintar dalam membaca pola data.',
      '<strong>Visualisasi Hasil:</strong> Menyusun grafik sederhana agar temuan teknis bisa langsung dipahami oleh masyarakat umum maupun pengambil kebijakan.'
    ],
    impact: 'Memberikan alat bantu analitik yang dapat memperkirakan tingkat risiko secara cepat, akurat, dan berbasis data empiris untuk efisiensi alokasi program bantuan.',
    visuals: [
      {
        src: 'assets/projects/ml_risk_eda.png',
        title: 'Peta Hubungan Antar Indikator (Correlation Heatmap)',
        desc: 'Grafik warna yang memperlihatkan seberapa erat hubungan antar faktor. Semakin kuat warnanya, semakin besar pengaruh variabel tersebut terhadap tingkat risiko krisis air.'
      },
      {
        src: 'assets/projects/ml_risk_importance.png',
        title: 'Faktor yang Paling Berpengaruh (Feature Importance)',
        desc: 'Grafik pemeringkat variabel yang menunjukkan faktor apa yang paling menentukan risiko. Grafik ini memberi panduan jelas mengenai masalah utama yang harus ditangani terlebih dahulu.'
      },
      {
        src: 'assets/projects/ml_risk_actual_pred.png',
        title: 'Uji Akurasi Prediksi (Actual vs Predicted)',
        desc: 'Grafik perbandingan antara data fakta di lapangan dengan hasil tebakan model komputer. Titik yang rapat mendekati garis lurus membuktikan bahwa prediksi model memiliki tingkat ketepatan yang tinggi.'
      }
    ]
  },
  {
    id: 'data-audio',
    category: 'data',
    categoryLabel: 'Deep Learning & AI',
    year: '2025 – 2026',
    title: 'Pipeline Preprocessing & Spektrogram Deep Learning',
    subtitle: 'Pengolahan Sinyal Audio Musik Tradisional Menjadi Representasi Visual Komputer',
    summary: 'Membangun alur pembersihan dan ekstraksi fitur rekaman musik tradisional nusantara, mengubah gelombang audio menjadi citra spektrogram frekuensi agar dapat dipelajari oleh model Artificial Intelligence.',
    tags: ['Deep Learning', 'VS Code', 'Audio Processing', 'Mel-Spectrogram', 'Representasi Suara'],
    problem: 'Berkas rekaman audio musik tradisional dari berbagai daerah memiliki durasi yang berbeda-beda, kualitas rekaman yang beragam, dan kebisingan latar belakang yang menyulitkan model kecerdasan buatan untuk mengenalinya.',
    steps: [
      '<strong>Analisis Karakteristik Koleksi Audio:</strong> Memeriksa statistik rentang durasi berkas suara dan memastikan setiap provinsi nusantara terwakili dengan adil.',
      '<strong>Pengubahan Suara Menjadi Visual (Spektrogram):</strong> Mengonversi suara menjadi gambar Mel-Spectrogram dan MFCC yang memperlihatkan tinggi rendah nada dan warna khas instrumen tradisional.',
      '<strong>Standardisasi Durasi Otomatis:</strong> Memotong rekaman menjadi bagian seragam berdurasi 5 detik dengan kualitas standar frekuensi 16 kHz mono.',
      '<strong>Pembersihan Suara Hening:</strong> Mendeteksi dan membuang bagian jeda diam di awal atau akhir rekaman yang tidak mengandung unsur musik.',
      '<strong>Penyeimbangan Data:</strong> Mengatur bobot pembobotan data agar daerah dengan jumlah rekaman sedikit tetap dipelajari dengan sama baiknya oleh sistem AI.'
    ],
    impact: 'Menghasilkan repositori data audio terstruktur yang siap dipakai untuk melatih sistem kecerdasan buatan dalam mengenali dan melestarikan kekayaan musik tradisional Indonesia.',
    visuals: [
      {
        src: 'assets/projects/audio_eda_dist.png',
        title: 'Sebaran Wilayah & Sampel Data Lagu Tradisional',
        desc: 'Grafik visual yang memetakan jumlah lagu dan statistik durasi dari berbagai provinsi. Visualisasi ini memastikan dataset seimbang dan mencakup ragam budaya nusantara secara proporsional.'
      },
      {
        src: 'assets/projects/audio_spec_multi.png',
        title: 'Visualisasi Spektrogram Suara (Waveform, Mel, & MFCC)',
        desc: 'Cara komputer melihat suara: gelombang nada diubah menjadi spektrum frekuensi visual. Warna terang menunjukkan frekuensi bunyi yang dominan dan timbre unik dari alat musik daerah.'
      },
      {
        src: 'assets/projects/audio_chroma.png',
        title: 'Analisis Harmoni & Nada (Chromagram Constant-Q)',
        desc: 'Visualisasi pola tangga nada musik tradisional dari 4 wilayah budaya. Grafik ini membuktikan bahwa setiap suku bangsa memiliki keunikan tangga nada yang dapat dibedakan secara ilmiah.'
      }
    ]
  },
  {
    id: 'data-movies',
    category: 'data',
    categoryLabel: 'Data Analytics & BI',
    year: '2024',
    title: 'Analisis Industri Perfilman & Segmentasi K-Means',
    subtitle: 'Eksplorasi Keuangan Box Office, Faktor Popularitas, & Pengelompokan Film',
    summary: 'Menganalisis data finansial ribuan film global untuk menemukan pola keterkaitan antara biaya produksi, apresiasi ulasan penonton, serta pengelompokan jenis film berdasarkan profitabilitas.',
    tags: ['VS Code', 'K-Means Clustering', 'EDA', 'Visualisasi Data'],
    problem: 'Memproduksi film membutuhkan investasi biaya yang sangat besar dengan risiko kegagalan komersial yang tinggi. Analisis ini membantu produser memahami formula konten yang diminati pasar.',
    steps: [
      '<strong>Pembersihan Data Industri:</strong> Menyelaraskan catatan angka keuangan dalam mata uang global dan menangani data pendapatan bioskop yang tidak lengkap.',
      '<strong>Analisis Korelasi Finansial:</strong> Menghitung seberapa besar pengaruh besarnya anggaran produksi terhadap kesuksesan penjualan tiket bioskop di seluruh dunia.',
      '<strong>Pengelompokan Film (K-Means Clustering):</strong> Membagi film ke dalam kelompok unik berdasarkan biaya vs pendapatan untuk menemukan pola "film laris (blockbuster)", "karya bermutu tinggi berbujet hemat (hidden gems)", dan "film berisiko rugi".',
      '<strong>Penyusunan Dasbor Temuan:</strong> Merangkum hasil temuan ke dalam grafik visual yang mudah dibaca untuk memandu strategi investasi dan distribusi film.'
    ],
    impact: 'Memberikan panduan bisnis berbasis data empiris mengenai genre yang paling konsisten menghasilkan keuntungan dan strategi alokasi anggaran produksi yang ideal.',
    visuals: [
      {
        src: 'assets/projects/movie_eda_scatter.png',
        title: 'Sebaran Biaya Produksi vs Pendapatan Bioskop',
        desc: 'Grafik titik yang menggambarkan apakah film bermodal besar selalu menghasilkan keuntungan tinggi, atau sebaliknya film hemat yang sukses mencetak keuntungan berlipat.'
      },
      {
        src: 'assets/projects/movie_corr_matrix.png',
        title: 'Matriks Korelasi Finansial & Rating Penonton',
        desc: 'Tabel warna visual yang mengukur hubungan timbal balik antara anggaran, popularitas promosi, dan skor ulasan penonton terhadap total pendapatan kotor bioskop.'
      },
      {
        src: 'assets/projects/movie_kmeans_clusters.png',
        title: 'Segmentasi Karakteristik Film (Klaster K-Means)',
        desc: 'Hasil pengelompokan algoritma yang membedakan film menjadi segmen komersial: kelompok film laris dunia, film festival bermutu, dan film dengan risiko investasi tinggi.'
      }
    ]
  }
];

// 2. DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectModal = document.getElementById('projectModal');
const modalCard = document.getElementById('modalCard');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalFooterBtn = document.getElementById('closeModalFooterBtn');

// Modal Elements
const modalCategory = document.getElementById('modalCategory');
const modalYear = document.getElementById('modalYear');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalImage = document.getElementById('modalImage');
const modalImageTitle = document.getElementById('modalImageTitle');
const modalImageCaption = document.getElementById('modalImageCaption');
const modalThumbnails = document.getElementById('modalThumbnails');
const modalTags = document.getElementById('modalTags');
const modalProblem = document.getElementById('modalProblem');
const modalSteps = document.getElementById('modalSteps');
const modalImpact = document.getElementById('modalImpact');

// Lightbox Elements
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeLightboxBtn = document.getElementById('closeLightboxBtn');

// Toast & Copy Elements
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
const copyEmailHeroBtn = document.getElementById('copyEmailHeroBtn');
const copyEmailHeroText = document.getElementById('copyEmailHeroText');
const copyEmailCardBtn = document.getElementById('copyEmailCardBtn');
const copyEmailCardText = document.getElementById('copyEmailCardText');

const EMAIL_ADDRESS = 'kelvin.alexander@student.umn.ac.id';

// 3. Render Projects Grid with Featured Image
function renderProjects(filter = 'all') {
  projectsGrid.innerHTML = '';

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'erp' && p.category === 'fiori'));

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl bg-surface-850/80 border border-surface-800 hover:border-brand-gold/40 flex flex-col justify-between overflow-hidden transition-all duration-300';
    
    // Tag pills HTML
    const tagsHtml = p.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
    const featuredImg = p.visuals[0];

    card.innerHTML = `
      <!-- Project Thumbnail Banner -->
      <div class="h-48 w-full overflow-hidden relative bg-surface-900 border-b border-surface-800 group cursor-pointer" onclick="openModal('${p.id}')">
        <img src="${featuredImg.src}" alt="${p.title}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-surface-850 via-surface-900/30 to-transparent"></div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-surface-900/90 text-brand-gold border border-brand-gold/30 backdrop-blur-sm shadow">
            ${p.categoryLabel}
          </span>
        </div>
        <div class="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/80 text-[11px] text-brand-light flex items-center gap-1.5 backdrop-blur-sm border border-white/10 shadow">
          <i data-lucide="image" class="w-3.5 h-3.5 text-brand-gold"></i>
          <span>${p.visuals.length} Visual Nyata</span>
        </div>
      </div>

      <!-- Project Content -->
      <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div class="space-y-2">
          <h4 class="text-lg font-bold text-white hover:text-brand-gold transition-colors leading-snug cursor-pointer" onclick="openModal('${p.id}')">
            ${p.title}
          </h4>
          <p class="text-xs text-brand-light/90 font-mono">
            ${p.subtitle}
          </p>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
            ${p.summary}
          </p>
        </div>

        <div class="pt-3 border-t border-surface-800/80 space-y-4">
          <div class="flex flex-wrap gap-1.5 items-center">
            ${tagsHtml}
          </div>
          <button onclick="openModal('${p.id}')" class="w-full py-2.5 px-4 rounded-xl bg-surface-800 hover:bg-surface-700 hover:border-brand-gold/40 border border-slate-700/80 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 group transition-all">
            <span>Buka Detail Kasus & 3 Visual Nyata</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
      </div>
    `;

    projectsGrid.appendChild(card);
  });

  if (window.lucide) {
    lucide.createIcons();
  }
}

// 4. Modal Functions with Multi-Visual Switcher
let activeProjectVisuals = [];
let currentVisualIndex = 0;

function switchVisual(index) {
  if (!activeProjectVisuals || !activeProjectVisuals[index]) return;
  currentVisualIndex = index;
  const v = activeProjectVisuals[index];

  modalImage.src = v.src;
  modalImageTitle.textContent = `${index + 1}. ${v.title}`;
  modalImageCaption.textContent = v.desc;

  // Update thumbnail active states
  const thumbBtns = modalThumbnails.querySelectorAll('button');
  thumbBtns.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('border-brand-gold', 'bg-brand-gold/15', 'ring-1', 'ring-brand-gold');
      btn.classList.remove('border-surface-700', 'bg-surface-800');
    } else {
      btn.classList.remove('border-brand-gold', 'bg-brand-gold/15', 'ring-1', 'ring-brand-gold');
      btn.classList.add('border-surface-700', 'bg-surface-800');
    }
  });
}

window.openModal = function(id) {
  const p = projects.find(item => item.id === id);
  if (!p) return;

  activeProjectVisuals = p.visuals || [];
  currentVisualIndex = 0;

  modalCategory.textContent = p.categoryLabel;
  modalYear.textContent = "";
  modalTitle.textContent = p.title;
  modalSubtitle.textContent = p.subtitle;
  modalProblem.textContent = p.problem;
  modalImpact.textContent = p.impact;

  // Render Thumbnails
  modalThumbnails.innerHTML = '';
  activeProjectVisuals.forEach((v, idx) => {
    const btn = document.createElement('button');
    btn.className = `p-2 rounded-xl border text-left flex items-center gap-3 transition-all duration-200 ${
      idx === 0 
        ? 'border-brand-gold bg-brand-gold/15 ring-1 ring-brand-gold' 
        : 'border-surface-700 bg-surface-800 hover:border-slate-500'
    }`;
    btn.onclick = () => switchVisual(idx);

    btn.innerHTML = `
      <img src="${v.src}" alt="${v.title}" class="w-12 h-10 object-cover rounded-lg border border-slate-700 shrink-0">
      <div class="flex-1 min-w-0">
        <div class="text-[10px] font-mono font-bold text-brand-gold uppercase">Visual ${idx + 1}</div>
        <div class="text-xs font-semibold text-slate-200 truncate">${v.title}</div>
      </div>
    `;
    modalThumbnails.appendChild(btn);
  });

  // Set default initial visual
  switchVisual(0);

  // Render Tags
  modalTags.innerHTML = p.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');

  // Render Steps
  modalSteps.innerHTML = p.steps.map(s => `
    <li class="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-900/40 border border-surface-800/50">
      <span class="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0"></span>
      <div class="leading-relaxed text-xs sm:text-sm text-slate-300">${s}</div>
    </li>
  `).join('');

  // Show Modal with Animation
  projectModal.classList.remove('opacity-0', 'pointer-events-none');
  modalCard.classList.remove('scale-95');
  modalCard.classList.add('scale-100');
  document.body.classList.add('overflow-hidden');

  if (window.lucide) {
    lucide.createIcons();
  }
};

function closeModal() {
  projectModal.classList.add('opacity-0', 'pointer-events-none');
  modalCard.classList.remove('scale-100');
  modalCard.classList.add('scale-95');
  document.body.classList.remove('overflow-hidden');
}

closeModalBtn.addEventListener('click', closeModal);
closeModalFooterBtn.addEventListener('click', closeModal);

// Close on backdrop click
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    closeModal();
  }
});

// 5. Fullscreen Lightbox Zoom Logic
window.openLightbox = function() {
  if (!activeProjectVisuals || !activeProjectVisuals[currentVisualIndex]) return;
  const v = activeProjectVisuals[currentVisualIndex];

  lightboxImg.src = v.src;
  lightboxTitle.textContent = v.title;
  lightboxCaption.textContent = v.desc;

  imageLightbox.classList.remove('opacity-0', 'pointer-events-none');
  document.body.classList.add('overflow-hidden');

  if (window.lucide) {
    lucide.createIcons();
  }
};

window.openAcademicProof = function() {
  lightboxImg.src = 'assets/transkrip_ipk.png';
  lightboxTitle.textContent = 'Bukti Portal Nilai Resmi: Kelvin Alexander';
  lightboxCaption.textContent = '';

  imageLightbox.classList.remove('opacity-0', 'pointer-events-none');
  document.body.classList.add('overflow-hidden');

  if (window.lucide) {
    lucide.createIcons();
  }
};

function closeLightbox() {
  imageLightbox.classList.add('opacity-0', 'pointer-events-none');
  // keep body overflow-hidden if modal is still open
  if (projectModal.classList.contains('pointer-events-none')) {
    document.body.classList.remove('overflow-hidden');
  }
}

closeLightboxBtn.addEventListener('click', closeLightbox);
imageLightbox.addEventListener('click', (e) => {
  if (e.target === imageLightbox || e.target.id === 'lightboxImg') {
    closeLightbox();
  }
});

// Close on ESC key (Close Lightbox first, or Modal)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!imageLightbox.classList.contains('pointer-events-none')) {
      closeLightbox();
    } else if (!projectModal.classList.contains('pointer-events-none')) {
      closeModal();
    }
  }
});

// 6. Filter Buttons Logic
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.classList.add('text-slate-400');
    });
    btn.classList.add('active');
    btn.classList.remove('text-slate-400');

    const filterVal = btn.getAttribute('data-filter');
    renderProjects(filterVal);
  });
});

// 7. Toast Notification Helper
function showToast(message) {
  toastMsg.textContent = message;
  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
  }, 2500);
}

// 8. Clipboard Copy Logic
function copyEmail(btnTextElement, originalText) {
  navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
    btnTextElement.textContent = 'Tersalin! ✅';
    showToast('Alamat email berhasil disalin ke clipboard!');
    setTimeout(() => {
      btnTextElement.textContent = originalText;
    }, 2000);
  }).catch(() => {
    showToast('Gagal menyalin email.');
  });
}

if (copyEmailHeroBtn) {
  copyEmailHeroBtn.addEventListener('click', () => {
    copyEmail(copyEmailHeroText, 'Salin Email');
  });
}

if (copyEmailCardBtn) {
  copyEmailCardBtn.addEventListener('click', () => {
    copyEmail(copyEmailCardText, 'Salin Alamat Email');
  });
}

// 9. Initial Execution
document.addEventListener('DOMContentLoaded', () => {
  renderProjects('all');
  if (window.lucide) {
    lucide.createIcons();
  }
});
