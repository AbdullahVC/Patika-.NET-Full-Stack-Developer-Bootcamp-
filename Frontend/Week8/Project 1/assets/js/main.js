const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("slidedown");
  } else {
    navbar.classList.remove("slidedown");
  }
});

function calculateBMI() {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  if (height && weight) {
    const bmi = (weight / (height / 100) ** 2).toFixed(2);
    document.getElementById("bmi-result").innerText = `Your BMI is ${bmi}`;
  } else {
    document.getElementById("bmi-result").innerText =
      "Please enter valid values!";
  }
}
