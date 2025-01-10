//butonu aktifleştirme
document.getElementById("jokebtn").addEventListener("click", getAPI);

function getAPI() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("joke").textContent = data.value;
    })
    .catch((error) => {
      console.error("the joke not displayed:", error);
      document.getElementById("joke").textContent =
        "The joke failed to load, please try again.";
    });
}
//sayfa ilk yüklendiği anda şakayı al
document.addEventListener("DOMContentLoaded", getAPI);
