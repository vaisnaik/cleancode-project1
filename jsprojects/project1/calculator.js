const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let output = "";

function clearScreen() {
  output = "";
  display.value = "";
}

function displayValue(value) {
  output += value;
  display.value = output;
}

function calculate() {
  try {
    let result = eval(output);
    output = result;
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const btnValue = event.target.dataset.value;

    switch (btnValue) {
      case "C":
        clearScreen();
        break;
      case "=":
        calculate();
        break;
      default:
        displayValue(btnValue);
    }
  });
});
