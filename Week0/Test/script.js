// Temel stiller
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#f4f4f4";

// Sayfa container
const container = document.createElement("div");

// HEADER: Logo ve Menü
const header = document.createElement("header");
header.style.backgroundColor = "#333";
header.style.color = "#fff";
header.style.padding = "15px";
header.style.textAlign = "center";
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";

const logo = document.createElement("div");
logo.innerText = "MyBlog";
logo.style.fontSize = "1.5em";
logo.style.fontWeight = "bold";

const navMenu = document.createElement("nav");
const navItems = ["Ana Sayfa", "Hakkımızda", "İletişim"];
navItems.forEach((item) => {
  const link = document.createElement("a");
  link.innerText = item;
  link.style.color = "#fff";
  link.style.marginLeft = "15px";
  link.style.textDecoration = "none";
  link.style.cursor = "pointer";
  link.addEventListener("click", () => loadPage(item));
  navMenu.appendChild(link);
});

header.appendChild(logo);
header.appendChild(navMenu);
container.appendChild(header);

// Ana içerik alanı
const content = document.createElement("div");
content.style.padding = "20px";

// FOOTER
const footer = document.createElement("footer");
footer.innerText = "© 2024 MyBlog. Tüm Hakları Saklıdır.";
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "10px";

// İlk sayfa yükle
loadPage("Ana Sayfa");

// Sayfa içerik yükleyici
function loadPage(page) {
  content.innerHTML = "";

  if (page === "Ana Sayfa") {
    const title = document.createElement("h1");
    title.innerText = "En Son Blog Yazıları";
    content.appendChild(title);

    const postContainer = document.createElement("div");
    postContainer.style.display = "grid";
    postContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    postContainer.style.gap = "20px";

    // Dinamik kartlar oluştur
    for (let i = 1; i <= 6; i++) {
      const card = document.createElement("div");
      card.style.backgroundColor = "#fff";
      card.style.border = "1px solid #ddd";
      card.style.borderRadius = "8px";
      card.style.overflow = "hidden";
      card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";

      card.innerHTML = `
        <img src="https://picsum.photos/300/200?random=${i}" alt="Blog ${i}" style="width:100%; height:auto;">
        <div style="padding: 15px;">
          <h3>Blog Başlığı ${i}</h3>
          <p>${generateLorem(20)}</p>
          <button style="background: #007BFF; color: white; border: none; padding: 8px 12px; cursor: pointer;">Devamını Oku</button>
        </div>
      `;
      postContainer.appendChild(card);
    }
    content.appendChild(postContainer);
  } else if (page === "Hakkımızda") {
    const about = document.createElement("div");
    about.innerHTML = `<h1>Hakkımızda</h1><p>${generateLorem(50)}</p>`;
    content.appendChild(about);
  } else if (page === "İletişim") {
    const form = document.createElement("form");
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.gap = "15px";
    form.style.width = "400px";
    form.style.margin = "auto";

    form.innerHTML = `
      <h1>İletişim</h1>
      <input type="text" placeholder="Adınız" style="padding: 10px;">
      <textarea placeholder="Mesajınız" rows="5" style="padding: 10px;"></textarea>
      <button style="padding: 10px; background-color: #28a745; color: #fff; border: none; cursor: pointer;">Gönder</button>
    `;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mesajınız gönderildi!");
    });
    content.appendChild(form);
  }
}

// Lorem Ipsum Üretici
function generateLorem(wordCount) {
  const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(
    " "
  );
  let result = [];
  for (let i = 0; i < wordCount; i++) {
    result.push(words[Math.floor(Math.random() * words.length)]);
  }
  return result.join(" ");
}

container.appendChild(content);
container.appendChild(footer);
document.body.appendChild(container);
