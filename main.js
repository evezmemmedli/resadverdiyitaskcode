"use strict";
const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const input = document.querySelector("input");
const reset = document.querySelector(".reset");
const notqe = document.querySelector(".notqe");
const menfiMusbet = document.querySelector(".menfi-musbet");

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function () {
    input.value += num[i].innerHTML;
  });
}

for (let j = 0; j < operator.length; j++) {
  operator[j].addEventListener("click", function () {
    input.value += operator[j].innerHTML;
  });
}

equal.addEventListener("click", function () {
  for (let f = 0; f < input.value.length; f++) {
    switch (input.value[f]) {
      case "+":
        const divide = input.value.split("+");
        let divide1 = parseFloat(divide[0]);
        let divide2 = parseFloat(divide[1]);
        input.value = divide1 + divide2;
        break;
      case "-":
        const divide3 = input.value.split("-");
        let divide4 = parseFloat(divide3[0]);
        let divide5 = parseFloat(divide3[1]);
        input.value = divide4 - divide5;
        break;
      case "*":
        const divide6 = input.value.split("*");
        let divide7 = parseFloat(divide6[0]);
        let divide8 = parseFloat(divide6[1]);
        input.value = divide7 * divide8;
        break;
      case "/":
        const divide9 = input.value.split("/");
        let divide10 = parseFloat(divide9[0]);
        let divide11 = parseFloat(divide9[1]);
        input.value = divide10 / divide11;
        break;
    }
  }
});

reset.addEventListener("click", function () {
  input.value = "";
});

notqe.addEventListener("click", function () {
  input.value += ".";
});
menfiMusbet.addEventListener("click", function () {
  let menMun = parseFloat(input.value);
  if (menMun < 0) {
    input.value = menMun * -1;
  } else {
    input.value = menMun * -1;
  }
});
