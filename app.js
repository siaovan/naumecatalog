/* NAUME FINAL — isi di content.js; desain di style.css. */
'use strict';
const data=window.NAUME, H=window.NaumeHelpers;
const $=id=>document.getElementById(id);
const text=(id,value)=>{if($(id))$(id).textContent=value??''};
const page=document.body.dataset.page;
const phone=H.phone(data.whatsapp), instagram=H.instagram(data.instagram);
const params=new URLSearchParams(location.search);

// NOTE A — gambar dan tautan kontak.
function setImage(id,src,alt){
 const el=typeof id==='string'?$(id):id;if(!el)return;
 el.alt=alt;el.onerror=()=>{el.hidden=true;const m=document.createElement('span');m.className='image-unavailable';m.textContent='Foto belum tersedia';el.after(m)};
 const url=H.imageUrl(src);if(url)el.src=url;else el.onerror();
}
function orderLink(id,message,label){
 const el=$(id);if(!el)return;
 el.textContent=phone?label:'Pemesanan segera dibuka';
 if(phone){el.href='https://wa.me/'+phone+'?text='+encodeURIComponent(message);el.target='_blank';el.rel='noopener noreferrer'}
 else el.setAttribute('aria-disabled','true');
}
text('announcement',data.announcement);text('concept-notice',data.conceptNotice);
if($('concept-notice'))$('concept-notice').hidden=!data.conceptNotice;
text('footer-copy',data.footer);text('footer-note',data.labels.footerNote);text('year',new Date().getFullYear());
document.querySelectorAll('header [data-page]').forEach(a=>{if(a.dataset.page===page||(page==='product'&&a.dataset.page==='shop'))a.setAttribute('aria-current','page')});
['contact-eyebrow','contact-title'].forEach(id=>text(id,data.contact[id.replace('contact-','')]));
text('order-note',data.orderNote);
orderLink('contact-link','Halo NAUME, saya ingin bertanya tentang koleksi crochet.',data.contact.button);
text('contact-state',phone||instagram?'Pilih cara menghubungi yang paling nyaman untukmu.':'Kontak pemesanan akan diumumkan.');
if(instagram)['instagram','contact-instagram','detail-instagram'].forEach(id=>{if($(id)){ $(id).hidden=false;Object.assign($(id),{href:instagram,target:'_blank',rel:'noopener noreferrer'})}});

// NOTE B — satu komponen kartu untuk Home dan Shop.
function productCard(product){
 const card=document.createElement('a');card.className='product';
 card.href='product.html?id='+encodeURIComponent(product.id);
 const frame=document.createElement('div');frame.className='product-image';
 const img=document.createElement('img');img.loading='lazy';frame.append(img);
 setImage(img,product.image,product.name+' — '+product.color);
 const info=document.createElement('div');info.className='product-info';
 [['product-name',product.name],['color',product.color],['price',H.price(product.price)]].forEach(([cls,value])=>{const el=document.createElement('span');el.className=cls;el.textContent=value;info.append(el)});
 card.append(frame,info);return card;
}
function drawProducts(products){$('products').replaceChildren(...products.map(productCard));$('empty').hidden=products.length>0}

// NOTE C — Home tidak pernah menampilkan lebih dari empat produk.
if(page==='home'){
 ['eyebrow','title','description'].forEach(k=>text('hero-'+k,data.hero[k]));
 text('hero-button',data.hero.button+' ↗');text('hero-side',data.labels.heroSide);
 setImage('hero-image',data.hero.image,'Campaign crochet NAUME');
 ['eyebrow','title','body'].forEach(k=>text('intro-'+k,data.intro[k]));
 ['eyebrow','title'].forEach(k=>text('catalog-'+k,data.catalog[k]));
 setImage('category-bag',data.categoryImages.bag,'Tas rajut NAUME');setImage('category-charm',data.categoryImages.charm,'Keychains dan charms NAUME');
 const ids=[...new Set(data.featuredIds||[])];
 const featured=ids.map(id=>data.products.find(p=>p.id===id)).filter(Boolean).slice(0,4);
 drawProducts(featured);
 document.querySelector('.featured').hidden=featured.length===0;
}
if(page==='home'||page==='story'){
 ['title','body','note'].forEach(k=>text('story-'+k,data.story[k]));text('story-eyebrow',data.labels.storyEyebrow);
}
if(page==='story')Object.entries(data.about).forEach(([k,v])=>text('about-'+k,v));

// NOTE D — katalog, pencarian, urutan, dan tombol muat lagi (12 produk per tahap).
if(page==='shop'){
 let category=['tas','keychain'].includes(params.get('category'))?params.get('category'):'semua';
 let visibleLimit=12;
 $('search').value=params.get('q')||'';
 $('sort').value=['name','low','high'].includes(params.get('sort'))?params.get('sort'):'default';
 function render(){
  const query=$('search').value.trim().toLocaleLowerCase('id');
  const items=data.products.filter(p=>(category==='semua'||p.category===category)&&[p.name,p.color,p.category].join(' ').toLocaleLowerCase('id').includes(query));
  const sort=$('sort').value;
  if(sort==='name')items.sort((a,b)=>a.name.localeCompare(b.name,'id'));
  if(sort==='low'||sort==='high')items.sort((a,b)=>{const aValid=typeof a.price==='number'&&Number.isFinite(a.price),bValid=typeof b.price==='number'&&Number.isFinite(b.price);if(!aValid)return bValid?1:0;if(!bValid)return -1;return sort==='low'?a.price-b.price:b.price-a.price});
  drawProducts(items.slice(0,visibleLimit));
  text('result-count',items.length>visibleLimit?visibleLimit+' dari '+items.length+' rajutan':items.length+' rajutan');
  $('load-more').hidden=items.length<=visibleLimit;
  document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));
  const url=new URL(location.href);url.searchParams.delete('category');url.searchParams.delete('q');url.searchParams.delete('sort');
  if(category!=='semua')url.searchParams.set('category',category);if(query)url.searchParams.set('q',$('search').value.trim());if(sort!=='default')url.searchParams.set('sort',sort);
  try{history.replaceState(null,'',url)}catch{/* Beberapa browser membatasi history pada file lokal. */}
 }
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;visibleLimit=12;render()}));
 ['search','sort'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',()=>{visibleLimit=12;render()}));
 $('reset-search').addEventListener('click',()=>{category='semua';$('search').value='';$('sort').value='default';visibleLimit=12;render();$('search').focus()});
 $('load-more').addEventListener('click',()=>{const firstNew=visibleLimit;visibleLimit+=12;render();$('products').children[firstNew]?.focus()});
 render();if(location.hash==='#search')$('search').focus();
}

// NOTE E — halaman detail yang dapat dibagikan melalui URL.
if(page==='product'){
 const product=data.products.find(p=>p.id===params.get('id'));
 $('product-missing').hidden=Boolean(product);$('product-detail').hidden=!product;
 if(product){
  document.title=product.name+' — '+product.color+' | NAUME';
  document.querySelector('meta[name="description"]').content=product.description;
  setImage('detail-image',product.image,product.name+' — '+product.color);
  text('detail-category',product.category==='tas'?'HANDMADE CROCHET BAG':'HANDMADE CROCHET CHARM');
  ['name','color','description','availability','care'].forEach(k=>text('detail-'+k,product[k]));
  text('detail-price',H.price(product.price));text('detail-specs',product.material+'\n'+product.dimensions);
  orderLink('detail-order','Halo NAUME, saya tertarik dengan '+product.name+' ('+product.color+'). Boleh info harga dan ketersediaannya?','Pesan via WhatsApp');
  text('detail-order-note','Harga, ongkir, dan waktu pengerjaan dikonfirmasi melalui percakapan. Untuk Instagram, sebutkan nama produk dan warna yang kamu suka.');
 }
}
