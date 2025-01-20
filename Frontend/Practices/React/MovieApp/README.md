# MovieApp 🎥

Bu proje, bir React uygulaması olarak film kartları ve favori listeleme özellikleriyle basit bir film uygulamasıdır. **[Learn React With This ONE Project](https://www.youtube.com/watch?v=G6D9cBaLViA&t=4778s)** YouTube videosundan ilham alınarak geliştirilmiştir. Projenin yapısını ve temel mantığını anlamak için bu video harika bir kaynaktır. Video sahibine bu değerli içerik için teşekkür ederim. 🙏

## Özellikler 🌟

- Filmlerin listelenmesi
- Favorilere ekleme
- React Context API ile state yönetimi
- Modüler dosya yapısı
- API entegrasyonu ile gerçek zamanlı veriler

## Proje Yapısı 🔂

```
src
├── assets             # Statik dosyalar
├── components         # Yeniden kullanılabilir bileşenler
│   ├── MovieCard.jsx  # Film kartı bileşeni
│   ├── NavBar.jsx     # Navigasyon çubuğu
├── contexts           # Context API ile oluşturulan dosyalar
│   └── MovieContext.jsx
├── css                # Stiller (CSS dosyaları)
├── pages              # Sayfalar (Routing için kullanılan bileşenler)
│   ├── Favorites.jsx  # Favoriler sayfası
│   ├── Home.jsx       # Ana sayfa
├── services           # API çağrılarını yöneten servisler
│   └── api.js
├── App.jsx            # Ana uygulama bileşeni
├── main.jsx           # React'in root bileşeni
└── index.html         # Ana HTML dosyası
```

## Kullanılan Teknolojiler 🖥

- React.js
- React Context API
- Vite
- CSS
- API Entegrasyonu

