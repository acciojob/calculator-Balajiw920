let input = document.getElementById("input");
let buttons = document.getElementsByTagName("button");

let firstVal = "";
let secondVal = "";
let result = "";
let operator = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let btnVal = this.innerHTML;

    if (btnVal === "AC") {
      first
