// Navbar scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  const handleScroll = () => {
    if (window.scrollY > 100) {
      navbar.classList.add(
        "bg-[#355592]",
        "shadow-md",
        "py-2",
        "backdrop-blur-sm",
        "bg-opacity-90"
      );
    } else {
      navbar.classList.remove(
        "bg-[#355592]",
        "shadow-md",
        "py-2",
        "backdrop-blur-sm",
        "bg-opacity-90"
      );
    }
  };

  // İlk yüklemede kontrol et
  handleScroll();

  // Scroll event listener
  window.addEventListener("scroll", handleScroll);
});

// Console'da test mesajı
console.log("JavaScript başarıyla yüklendi!");
