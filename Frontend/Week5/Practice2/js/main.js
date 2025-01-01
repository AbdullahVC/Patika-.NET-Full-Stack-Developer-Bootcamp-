// Tuşları ve ses dosyalarını eşleştirme
const keySoundMap = {
    a: "assets/sounds/boom.wav",
    s: "assets/sounds/clap.wav",
    d: "assets/sounds/hihat.wav",
    f: "assets/sounds/kick.wav",
    g: "assets/sounds/openhat.wav",
    h: "assets/sounds/ride.wav",
    j: "assets/sounds/snare.wav",
    k: "assets/sounds/tink.wav",
    l: "assets/sounds/tom.wav",
};
  
  // Tüm butonları seçiyoruz
  const buttons = document.querySelectorAll("button");
  
  // Butona tıklama olayını dinleme
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.textContent; // Butondaki harfi al
      playSound(key);
    });
  });
  
  // Klavyeden tuşlara basıldığında ses çalma
  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase(); // Tuşu küçük harfe çevir
    if (keySoundMap[key]) {
      playSound(key);
    }
  });
  
  // Ses oynatma fonksiyonu
  function playSound(key) {
    const soundPath = keySoundMap[key]; // Ses dosyasının yolu
    if (soundPath) {
      const audio = new Audio(soundPath);
      audio.play();
    }
  }
  