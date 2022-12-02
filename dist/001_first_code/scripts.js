"use strict";
const input1 = document.querySelector("#number1");
const input2 = document.querySelector("#number2");
const button = document.querySelector("#btn_sum");
const resultSpan = document.querySelector("#result");
function sum(number1, number2) {
    const result = number1 + number2;
    return result;
}
button?.addEventListener("click", () => {
    const result = sum(Number(input1.value), Number(input2.value));
    if (result) {
        resultSpan.innerHTML = String(result);
    }
});
