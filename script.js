// إظهار نص بديل واضح داخل أماكن الصور والفيديوهات لحين إضافة الملفات الفعلية
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.img-slot img').forEach((img, i) => {
    img.addEventListener('error', () => {
      const slot = img.closest('.media-slot');
      slot.innerHTML = `<div class="media-placeholder">صورة ${i + 1}<br><span>ضع ملف الصورة في مجلد images/</span></div>`;
    });
  });

  document.querySelectorAll('.video-slot video').forEach((video, i) => {
    video.addEventListener('error', () => {
      const slot = video.closest('.media-slot');
      slot.innerHTML = `<div class="media-placeholder">فيديو ${i + 1}<br><span>ضع ملف الفيديو في مجلد videos/</span></div>`;
    }, true);
  });

  // فورم صفحة "اتصل بنا": يبني رسالة واتساب جاهزة من بيانات الفورم ويفتحها
  const form = document.getElementById('whatsapp-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const service = form.service.value;
      const message = form.message.value.trim();

      let text = `مرحبًا، اسمي ${name}.\nرقم جوالي: ${phone}\nالخدمة المطلوبة: ${service}`;
      if (message) text += `\nتفاصيل إضافية: ${message}`;

      window.open(`https://wa.me/966543861510?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // القائمة المتنقلة (هامبرغر) على الموبايل
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ظل خفيف على الهيدر عند التمرير لأسفل
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    document.addEventListener('scroll', onScroll);
    onScroll();
  }

});
