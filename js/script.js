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

    // baguetteBox.js Lightbox Galerisini Başlat
    // .lightbox-gallery class'ına sahip bir elementin var olup olmadığını kontrol et
    if (document.querySelector('.lightbox-gallery')) {
        baguetteBox.run('.lightbox-gallery');
    }

    const sssItems = document.querySelectorAll('.sss-item');
    
    // Eğer sayfada SSS bölümü varsa...
    if (sssItems.length > 0) {
        sssItems.forEach(item => {
            const soru = item.querySelector('.sss-soru');
            
            soru.addEventListener('click', () => {
                // Tıkladığımız soru zaten açık mı diye kontrol et
                const isOpen = item.classList.contains('active');
                
                // Önce tüm açık olanları kapat (profesyonel dokunuş)
                sssItems.forEach(i => i.classList.remove('active'));
                
                // Eğer tıkladığımız kapalıysa, onu aç
                if (!isOpen) {
                    item.classList.add('active');
                }
            });
        });
    }

    // İLETİŞİM FORMU YÖNETİMİ
    const iletisimFormu = document.querySelector('#iletisim-formu');
    const formSonuc = document.querySelector('#form-sonuc');

    // Eğer sayfada iletişim formu varsa bu kodları çalıştır
    if (iletisimFormu) {
        iletisimFormu.addEventListener('submit', function(event) {
            // 1. Formun varsayılan gönderme davranışını engelle (sayfanın yenilenmesini önle)
            event.preventDefault();

            // 2. Formdaki verileri al
            const adSoyad = document.querySelector('#adsoyad').value;
            const email = document.querySelector('#email').value;
            const konu = document.querySelector('#konu').value;
            const mesaj = document.querySelector('#mesaj').value;

            // 3. Temel Doğrulama (Validation)
            if (adSoyad.trim() === '' || email.trim() === '' || konu.trim() === '' || mesaj.trim() === '') {
                // Eğer herhangi bir alan boşsa...
                formSonuc.className = 'form-sonuc hata'; // Hata class'ını ata
                formSonuc.textContent = 'Lütfen tüm alanları doldurunuz.';
                return; // Fonksiyonu burada durdur
            }

            // 4. (Simülasyon) Veriler backend'e gönderiliyor gibi yapalım
            // Gerçek bir projede, fetch ile bu verileri bir API'ye göndeririz.
            console.log('Form Verileri:', { adSoyad, email, konu, mesaj });
            
            // 5. Kullanıcıya başarı mesajı göster
            formSonuc.className = 'form-sonuc basari';
            formSonuc.textContent = `Teşekkürler, ${adSoyad}! Mesajınız başarıyla gönderildi. En kısa sürede size geri döneceğiz.`;

            // 6. Başarılı gönderimden sonra formu temizle
            iletisimFormu.reset();
        });
    }

    
    // ÇEREZ ONAY BANNER'I MANTIĞI
    const cookieBanner = document.querySelector('#cookie-banner');
    const acceptBtn = document.querySelector('#cookie-accept-btn');

    // Eğer banner elementi sayfada varsa devam et
    if (cookieBanner && acceptBtn) {
        
        // 1. Sayfa yüklendiğinde, localStorage'da onay bilgisi var mı diye kontrol et.
        const consentGiven = localStorage.getItem('cookieConsent');
        
        // 2. Eğer daha önce onay verilmemişse (!consentGiven), banner'ı göster.
        if (!consentGiven) {
            cookieBanner.classList.add('visible');
        }

        // 3. 'Kabul Et' butonuna tıklanınca ne olacağını belirle.
        acceptBtn.addEventListener('click', () => {
            // Onay bilgisini localStorage'a kaydet. Değerin ne olduğu önemli değil, var olması yeterli.
            localStorage.setItem('cookieConsent', 'true');
            
            // Banner'ı gizle.
            cookieBanner.classList.remove('visible');
        });
    }

});


// SAYFA YÜKLEME ANİMASYONU (LOADER) MANTIĞI
window.onload = function() {
    const loaderWrapper = document.querySelector('#loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.classList.add('hidden');
    }
};