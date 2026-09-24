/* ==========================================================
   NAUME — PUSAT ISI WEBSITE
   Cari NOTE 01, NOTE 02, dst. dengan Cmd+F / Ctrl+F.
   Ubah tulisan DI DALAM tanda kutip. Pertahankan koma dan kurung.
   Cara tanpa edit kode: buka editor.html, lalu ekspor content.js.
   ========================================================== */
window.NAUME = {
  // NOTE 01 — KONTAK. Nomor WhatsApp format 628..., tanpa +/spasi.
  whatsapp: "62811044889",
  instagram: "https://www.instagram.com/bynaume/",
  // NOTE 02 — Banner. Ganti setelah foto & data asli tersedia.
  announcement: "HANDMADE CROCHET · DIBUAT SATU PER SATU",
  conceptNotice: "Pratinjau koleksi — foto ilustrasi, belum mewakili produk final.",
  // NOTE 03 — HERO / FOTO UTAMA. Simpan foto baru dalam folder assets.
  hero: {eyebrow: "A LITTLE WORLD OF CROCHET", title: "Dirajut perlahan,\ndisimpan dekat.", description: "Tas dan pernak-pernik rajut, dibuat dengan tangan untuk menemani cerita sehari-hari.", image: "assets/campaign.jpg", button: "Jelajahi rajutan kami"},
  // NOTE 04 — CERITA BRAND
  story: {title: "Dari seutas benang,\nmenjadi sesuatu yang berarti.", body: "Kami menyukai hal-hal kecil: tekstur benang, warna yang hangat, dan detail yang terasa personal. Di NAUME, semuanya dimulai dari tangan yang merajut, satu simpul demi satu simpul.", note: "HANDMADE, WITH A LITTLE HEART."},
  // NOTE 05 — SECTION KEYCHAIN
  small: {title: "Kecil, tapi penuh cerita.", body: "Gantungkan di tas, bawa bersama kunci, atau berikan kepada seseorang. Rajutan kecil untuk menemani keseharian.", image: "assets/keychains.jpg"},
  // NOTE 08 — TEKS BAGIAN LAIN DI HOMEPAGE
  intro: {eyebrow: "EVERY STITCH, A LITTLE STORY", title: "Buatan tangan.\nUntuk dibawa ke mana-mana.", body: "Rajutan yang terasa dekat, dari tas kesayangan sampai pernak-pernik kecil yang membuatmu tersenyum."},
  catalog: {eyebrow: "THE CROCHET COLLECTION", title: "Rajutan pilihan.", body: "Dibuat satu per satu.\nDipilih untuk keseharianmu."},
  contact: {eyebrow: "LET'S MAKE IT PERSONAL", title: "Ada rajutan yang kamu suka?", button: "Pesan via WhatsApp"},
  labels: {heroSide: "CROCHET BY NAUME / CHAPTER 01", smallEyebrow: "LITTLE CROCHET THINGS", storyEyebrow: "THE HANDS BEHIND NAUME", footerNote: "Made by hand. Kept with love."},
  // NOTE 09 — HOME: pilih maksimal 4 ID produk. Produk lain tetap muncul di Shop.
  featuredIds: ["bloom-coffee", "petal-bone", "bloom-oxblood", "little-bloom"],
  // NOTE 10 — FOTO KATEGORI DAN CERITA TAMBAHAN
  categoryImages: {bag: "assets/coffee.jpg", charm: "assets/keychains.jpg"},
  about: {body: "NAUME adalah ruang untuk tas dan pernak-pernik crochet yang hangat dan personal. Kami ingin setiap rajutan menemukan tempatnya dalam keseharianmu.", thread: "Warna dan tekstur memberi setiap rajutan karakternya sendiri.", hands: "Dikerjakan dengan tangan, dengan perhatian pada setiap simpul dan detail.", everyday: "Untuk menemani langkahmu, menghias tas kesayangan, atau menjadi hadiah kecil untuk seseorang."},
  // NOTE 06 — PRODUK. Salin satu blok {...} untuk menambah produk.
  // id harus unik; category: tas atau keychain; price: angka rupiah atau null.
  // Jangan pakai titik pada price: tulis 250000, bukan 250.000.
  products: [
    {id:"bloom-coffee",name:"Bloom Bag",color:"Coffee",category:"tas",price:null,image:"assets/coffee.jpg",description:"Tas rajut dengan bentuk lembut dan sentuhan bunga. Teman kecil untuk hari-hari yang ingin kamu nikmati perlahan.",material:"Detail bahan akan diumumkan",dimensions:"Ukuran akan diumumkan",availability:"Segera hadir",care:"Simpan di tempat kering. Petunjuk perawatan final mengikuti jenis benang produk."},
    {id:"petal-bone",name:"Petal Bag",color:"Bone",category:"tas",price:null,image:"assets/bone.jpg",description:"Tekstur rajut yang hangat, warna yang tenang, dan detail bunga yang manis secukupnya.",material:"Detail bahan akan diumumkan",dimensions:"Ukuran akan diumumkan",availability:"Segera hadir",care:"Simpan di tempat kering. Petunjuk perawatan final mengikuti jenis benang produk."},
    {id:"bloom-oxblood",name:"Bloom Bag",color:"Oxblood",category:"tas",price:null,image:"assets/oxblood.jpg",description:"Rajutan bertekstur dalam warna yang dalam. Dibayangkan untuk menjadi bagian personal dari gayamu.",material:"Detail bahan akan diumumkan",dimensions:"Ukuran akan diumumkan",availability:"Segera hadir",care:"Simpan di tempat kering. Petunjuk perawatan final mengikuti jenis benang produk."},
    {id:"little-bloom",name:"Little Bloom Charm",color:"Coffee · Oxblood · Dusty Blue",category:"keychain",price:null,image:"assets/keychains.jpg",description:"Bunga rajut mungil untuk tas dan kunci. Sebuah hadiah kecil, dengan perhatian di setiap simpulnya.",material:"Detail bahan akan diumumkan",dimensions:"Ukuran akan diumumkan",availability:"Segera hadir",care:"Hindari menarik bagian rajutan dan bersihkan perlahan sesuai bahan."}
  ],
  // NOTE 07 — FOOTER / INFORMASI PESANAN
  orderNote: "Untuk pilihan warna, ketersediaan, dan waktu pengerjaan, hubungi kami sebelum memesan.",
  footer: "Tas, keychain, dan cerita kecil yang dirajut dengan tangan."
};
