const textInput = document.getElementById("textInput");
const checkButton = document.getElementById("checkButton");
const resultText = document.getElementById("result");

function isPalindrome(text) {
  // Preprocess text (remove non-alphanumeric characters and convert to lowercase)
  const processedText = text.replace(/[^a-z0-9]/gi, "").toLowerCase();

  // Check if the reversed version is equal to the original processed text
  const reversedText = processedText.split("").reverse().join("");
  return processedText === reversedText;
}

checkButton.addEventListener("click", function() {
  const text = textInput.value;
  const isItPalindrome = isPalindrome(text);

  if (text) {
    resultText.textContent = isItPalindrome ? "Yes! It's a palindrome." : "Nope! It's not a palindrome.";
  } else {
    resultText.textContent = "Please enter some text to check.";
  }
});
