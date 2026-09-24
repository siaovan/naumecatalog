# NAUME — versi final multipage

## Membuka website
Ekstrak ZIP, lalu buka index.html di Chrome atau Safari. Tidak perlu npm atau instalasi. Semua halaman juga bisa diunggah ke hosting statis seperti GitHub Pages. Situs belum diterbitkan ke akun GitHub kamu.

## Susunan halaman
- index.html: Home, pengenalan, dua kategori, maksimal 4 produk pilihan, cuplikan cerita.
- shop.html: seluruh produk, filter tas/keychains, pencarian, pengurutan, 12 produk per tahap.
- story.html: cerita NAUME dan handmade crochet.
- product.html?id=bloom-coffee: detail produk dengan CTA WhatsApp dan Instagram.

Home tidak bertambah panjang saat produk ditambah. Tentukan ID produk pilihan melalui NOTE 09 di content.js atau editor lokal. Link kategori Home langsung membawa pengunjung ke filter yang sesuai di Shop.

## Mengubah tanpa coding
1. Buka editor.html.
2. Edit teks, foto kategori, kontak, atau produk.
3. Untuk produk Home, isi maksimal 4 ID produk, dipisahkan koma. ID harus cocok dengan produk yang ada.
4. Klik Unduh content.js.
5. Gantikan content.js lama dengan hasil unduhan; pastikan namanya bukan content (1).js.
6. Muat ulang website. Untuk situs online, unggah file yang berubah.

Editor bekerja lokal dan tidak memiliki server/login. Browser dapat memberi peringatan jika kamu meninggalkan tab dengan perubahan belum diekspor. Di HP peringatan tidak selalu dijamin; unduh file sebelum menutup tab. Tombol Buka website menampilkan data file tersimpan, bukan perubahan draf yang belum diekspor.

## Mengubah langsung di VS Code
Cari dengan Cmd+F / Ctrl+F:
- NOTE 01: WhatsApp dan Instagram.
- NOTE 02: pengumuman dan label ilustrasi.
- NOTE 03: hero Home.
- NOTE 04: cerita utama.
- NOTE 06: data produk.
- NOTE 07: pemesanan dan footer.
- NOTE 08: pengantar dan label editorial.
- NOTE 09: featuredIds, maksimal empat ID untuk Home.
- NOTE 10: foto kategori dan cerita tambahan.
- NOTE WARNA / NOTE MOBILE di style.css: tema dan responsif.

Bagian small (NOTE 05) disimpan untuk kompatibilitas data sebelumnya; layout baru menampilkan keychains melalui kategori Home dan Shop.

## Foto dan data produk
Masukkan foto asli ke assets/, lalu gunakan path seperti assets/tas-baru.jpg. Dianjurkan foto produk 4:5. Jangan ubah nama folder assets. Foto saat ini merupakan ilustrasi AI, bukan dokumentasi produk final. Logo berasal dari artwork yang kamu kirim. Nama produk contoh; harga, bahan, dan ukuran masih perlu diisi. Kosongkan conceptNotice hanya setelah memakai data/foto asli.

Harga berupa angka 250000, bukan 250.000. null berarti Harga menyusul. Harga yang belum diisi ditempatkan setelah produk berharga saat diurutkan. Kategori produk: tas atau keychain. ID harus unik dan tidak berubah jika link produk lama masih ingin digunakan. Mengganti ID melalui editor otomatis memperbarui pilihan Home; menghapus produk juga menghapusnya dari pilihan Home. Jika pilihan Home kosong, bagian produk pilihan disembunyikan.

## CTA aktif
WhatsApp: +62811044889. Instagram: @bynaume.
WhatsApp membuka pesan siap isi dengan nama produk dan warna; pengunjung menekan Kirim sendiri. Instagram menuju profil, bukan DM otomatis. Harga, ongkir, waktu pengerjaan dan pemesanan dikonfirmasi melalui percakapan. Tidak ada checkout, pembayaran atau sinkronisasi stok otomatis.

## Mobile
Menu selalu terlihat, kategori/produk dua kolom, detail satu kolom. CTA ditumpuk agar mudah disentuh. Font input 16px, target tombol minimal 44–48px. Animasi dinonaktifkan untuk prefers-reduced-motion. Gambar menggunakan aset lokal dengan lazy loading untuk foto di bawah hero.

## Unggah ke hosting
Unggah seluruh empat file halaman, content.js, helpers.js, app.js, style.css dan assets/. Tidak perlu build. editor.html dan panduan boleh disimpan lokal. Pastikan index.html berada di root folder yang diterbitkan, bukan satu folder bersarang yang tidak dipilih oleh hosting.

## Pemeriksaan dan batasan
Sintaks, tautan lokal, aset, ID halaman, pemilihan Home dan konfigurasi kontak diperiksa otomatis. Browser uji tidak dapat terhubung ke server pratinjau pada sesi ini, sehingga screenshot desktop/HP dan pengujian interaksi browser langsung belum tersedia. Lakukan pemeriksaan di perangkatmu sebelum publikasi, terutama crop foto jika aset diganti. Foto/gambar konsep, harga dan informasi produk perlu difinalkan sebelum menerima pesanan.
