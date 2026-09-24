/* Fungsi bersama untuk website dan editor. Isi produk tetap di content.js. */
window.NaumeHelpers = {
  phone(value) {
    let number = String(value || '').replace(/[\s()+.-]/g, '');
    if (number.startsWith('08')) number = '62' + number.slice(1);
    return /^628\d{7,12}$/.test(number) ? number : '';
  },
  imageUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    try {
      const url = new URL(value, location.href);
      return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  },
  instagram(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && ['instagram.com', 'www.instagram.com'].includes(url.hostname) ? url.href : '';
    } catch { return ''; }
  },
  price(value) {
    return typeof value === 'number' && Number.isFinite(value) && value >= 0
      ? new Intl.NumberFormat('id-ID', {style:'currency', currency:'IDR', maximumFractionDigits:0}).format(value)
      : 'Harga menyusul';
  }
};
