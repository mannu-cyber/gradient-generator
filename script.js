let colorFields = document.querySelector(".area");

let rgb1, rgb2;

const randomNum = () => {
  hexCode = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + hexCode[Math.floor(Math.random() * 16)];
  }
  return colors;
};

document.querySelector("#btn1").addEventListener("click", () => {
  rgb1 = randomNum();
  colorFields.innerHTML = `  background-image: linear-gradient(to right, 
    ${rgb1}
    , ${rgb2}`;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  document.querySelector("#btn1").innerHTML = `${rgb1}`;
});

document.querySelector("#btn2").addEventListener("click", () => {
  rgb2 = randomNum();
  colorFields.innerHTML = `  background-image: linear-gradient(to right, 
  ${rgb1}
  , ${rgb2}`;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  document.querySelector("#btn2").innerHTML = `${rgb2}`;
});

colorFields.addEventListener("click", () => {
  const hexaString = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`;
  window.navigator.clipboard
    .writeText(hexaString)
    .then(() => {
      done();
    })
    .catch(() => {});
});



const done = () => {
  document.querySelector("#animebutton").addEventListener("click", () => {
    gsap.from(".noticeboard h1", {
      top: 30,
      scale: 0,
      y: -20,
    });
  });
};
