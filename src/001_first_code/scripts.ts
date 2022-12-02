const input1 = document.querySelector("#number1") as HTMLInputElement;
const input2 = document.querySelector("#number2") as HTMLInputElement;
const button = document.querySelector("#btn_sum");
const resultSpan = document.querySelector("#result") as HTMLSpanElement;

function sum(number1: number, number2: number) {
  const result = number1 + number2;
  return result;
}

button?.addEventListener("click", () => {
  const result = sum(Number(input1.value), Number(input2.value));

  if (result) {
    resultSpan.innerHTML = String(result);
  }
});
