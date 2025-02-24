function yemekHazir(garsonaHaberVer) {
  setTimeout(() => {
    garsonaHaberVer("Yemek hazır!");
  }, 1000);
}

yemekHazir((mesaj) => {
  console.log(mesaj);
});
