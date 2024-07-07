const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
let generatedPassword1 = "";
let generatedPassword2 = "";

function generate() {
  generatedPassword1 = "";
  generatedPassword2 = "";
  firstPasswordEl.textContent = "";
  secondPasswordEl.textContent = "";

  for (let i = 0; i < 15; i++) {
    let passwordIndex1 = Math.floor(Math.random() * characters.length); 
    generatedPassword1 += characters[passwordIndex1];

    let passwordIndex2 = Math.floor(Math.random() * characters.length);
    generatedPassword2 += characters[passwordIndex2];
  }

  firstPasswordEl.textContent = generatedPassword1;
  secondPasswordEl.textContent = generatedPassword2;
}
