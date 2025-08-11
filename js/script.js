// js/script.js dosyası

document.addEventListener('DOMContentLoaded', () => {

    // 1. Gerekli HTML elementlerini seçip değişkenlere atayalım.
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('header nav');

    // 2. Hamburger ikonunun ve menünün var olup olmadığını kontrol edelim.
if (hamburger && navMenu) {
    // 3. Hamburger ikonuna bir 'click' (tıklama) olayı dinleyicisi ekleyelim.
    hamburger.addEventListener('click', () => {
        // 4. Her tıklandığında, nav elementine 'mobil-menu-aktif' class'ını ekleyip kaldıralım.
        navMenu.classList.toggle('mobil-menu-aktif');
     });
}

    // js/script.js dosyasının içine, mobil menü kodundan sonra

// YUKARI ÇIK BUTONU LOGIĞI
const scrollTopBtn = document.querySelector('#scrollTopBtn');

if (scrollTopBtn) {
    // 1. Pencerenin 'scroll' (kaydırma) olayını dinle
    window.addEventListener('scroll', () => {
        // 2. Kullanıcı 400px'den fazla aşağı kaydırdıysa...
        if (window.scrollY > 400) {
            // butona 'visible' class'ını ekle (görünür yap).
            scrollTopBtn.classList.add('visible');
        } else {
            // Değilse, 'visible' class'ını kaldır (gizle).
            scrollTopBtn.classList.remove('visible');
        }
    });

    // 3. Butona 'click' (tıklama) olayını dinle
    scrollTopBtn.addEventListener('click', (event) => {
        event.preventDefault(); // a etiketinin normal davranışını engelle (# hedefine gitmesin)
        
        // 4. Sayfanın en üstüne (koordinat 0) yumuşak bir şekilde kaydır
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 'auto' (anında) yerine 'smooth' (yumuşak)
        });
    });
}
AOS.init({
        duration: 800, // Animasyonların süresi (milisaniye)
        once: true      // Animasyonların sadece bir kere çalışmasını sağla
    });

});