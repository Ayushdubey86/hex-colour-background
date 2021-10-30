const hexN = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexbtn = document.querySelector(".hexbtn");
const bodybcg = document.querySelector("body");
const hex = document.getElementById("hex");
hexbtn.addEventListener("click", getHex);
hexbtnauto.addEventListener("click", hexAutoMode);
function getHex() {
  let hexcol = "#";
  for (let i = 0; i < 6; i++) {
    let r = Math.floor(Math.random() * hexN.length);
    hexcol = hexcol + hexN[r];
  }
  bodybcg.style.backgroundColor = hexcol;
  hex.innerHTML = `
    <h1>${hexcol}</h1>
    `;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var stopauto = 1;

async function hexAutoMode() {
  if (stopauto === 1) {
    stopauto = 0;
  } else if (stopauto === 0) {
    stopauto = 1;
  }
  if (stopauto === 0) {
    hexbtnauto.innerHTML = `
    Auto mode: ON
    `;
    for (let i = 0; ; i++) {
      if (stopauto === 1) {
        hexbtnauto.innerHTML = `
        Auto mode: OFF
        `;
        break;
      }
      getHex();
      await sleep(25);
      i-=1;
    }
  }
}
