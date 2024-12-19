// Kullanıcı adını al ve ekrana yazdır
const userName = prompt("Adınız nedir?");
document.getElementById("myName").textContent = userName;

// Saat ve Tarih Fonksiyonu
function showTime() {
    const now = new Date(); // Şu anki zamanı al
    const currentTime = now.toLocaleTimeString("tr-TR", { weekday: "long", hour: "2-digit", minute: "2-digit", second: "2-digit" });

    // Zamanı ekrana yazdır
    document.getElementById("myClock").textContent = currentTime;

    // 1 saniyede bir güncelle
    setTimeout(showTime, 1000);
}

// İlk kez çalıştır
showTime();
