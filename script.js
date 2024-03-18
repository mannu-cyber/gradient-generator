let colorFields = document.querySelector(".area");

let rgb1, rgb2;

const randomNum = () => {
  let hexCode = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += hexCode[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const updateGradient = () => {
  colorFields.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  colorFields.innerHTML = ` background-image :linear-gradient(to right, ${rgb1}, ${rgb2})`;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  document.querySelector(
    "#btn1"
  ).style.backgroundImage = `linear-gradient(to right, ${rgb2}, ${rgb1})`;
  document.querySelector(
    "#btn2"
  ).style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

document.querySelector("#btn1").addEventListener("click", () => {
  rgb1 = randomNum();
  updateGradient();
  document.querySelector("#btn1").innerHTML = `${rgb1}`;
});

document.querySelector("#btn2").addEventListener("click", () => {
  rgb2 = randomNum();
  updateGradient();
  document.querySelector("#btn2").innerHTML = `${rgb2}`;
});

document.querySelector("#btn3").addEventListener("click", () => {
  rgb1 = randomNum();
  rgb2 = randomNum();
  updateGradient();
  document.querySelector(
    "#btn3"
  ).style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
});

colorFields.addEventListener("click", () => {
  const hexaString = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`;
  window.navigator.clipboard
    .writeText(hexaString)
    .then(() => {
      alert("Color Copied Successfully");
    })
    .catch(() => {});
});
