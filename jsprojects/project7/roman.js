const decimalInput = document.getElementById("decimalNumber");
const convertButton = document.getElementById("convertButton");
const romanNumeralText = document.getElementById("romanNumeral");

const romanNumeralMap = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I"
};

function convertDecimalToRoman(decimal) {
  let romanNumeral = "";
  for (const value in romanNumeralMap) {
    while (decimal >= value) {
      romanNumeral += romanNumeralMap[value];
      decimal -= value;
    }
  }
  return romanNumeral;
}

convertButton.addEventListener("click", function() {
  const decimalNumber = parseInt(decimalInput.value);

  if (isNaN(decimalNumber) || decimalNumber < 1 || decimalNumber > 3999) {
    romanNumeralText.textContent = "Please enter a valid decimal number between 1 and 3999.";
    return;
  }

  const romanNumeral = convertDecimalToRoman(decimalNumber);
  romanNumeralText.textContent = `The Roman numeral is: ${romanNumeral}`;
});
