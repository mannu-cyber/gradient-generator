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
  colorFields.innerHTML = `  background-image: linear-gradient(90deg, 
    ${rgb1}
    , ${rgb2}`;
    
});

document.querySelector("#btn2").addEventListener("click", () => {
  rgb2 = randomNum();
  colorFields.innerHTML = `  background-image: linear-gradient(90deg, 
  ${rgb1}
  , ${rgb2}`;
});

colorFields.addEventListener("click", () => {
  const hexaString = `background-image:linear-gradient(90deg, ${rgb1}, ${rgb2})`;
  window.navigator.clipboard
    .writeText(hexaString)
    .then(() => {
      alert("copied code into the clipboard");
    })
    .catch(() => {
      alert("sorry unable to copy");
    });
});

 const bodybg = document.body;
 bodybg.style.backgroundImage = `linear-gradient(90deg, ${rgb1}, ${rgb2}`
