let input = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        // Safely evaluate the expression
        string = Function(`'use strict'; return (${string})`)();
        input.value = string;
      } else if (e.target.innerHTML == "AC") {
        string = "";
        input.value = string;
      } else if (e.target.innerHTML == "DEL") {
        string = string.slice(0, -1);
        input.value = string;
      } else {
        string += e.target.innerHTML;
        input.value = string;
      }
    } catch (error) {
      input.value = "Error";
      string = "";
    }
  });
});