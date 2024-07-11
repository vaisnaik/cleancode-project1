const minRange = 1;
const maxRange = 100;
let randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
const guessButton = document.getElementById("guessButton");
const userGuessInput = document.getElementById("userGuess");
const feedbackText = document.getElementById("feedback");

guessButton.addEventListener("click", function() {
  const userGuess = parseInt(userGuessInput.value);

  if (isNaN(userGuess)) {
    feedbackText.textContent = "Please enter a valid number.";
    return;
  }

  if (userGuess < minRange || userGuess > maxRange) {
    feedbackText.textContent = `Please guess between ${minRange} and ${maxRange}.`;
    return;
  }

  if (userGuess === randomNumber) {
    feedbackText.textContent = "Congratulations! You guessed the number!";
    guessButton.disabled = true; // Disable button after winning
  } else if (userGuess > randomNumber) {
    feedbackText.textContent = "Your guess is too high.";
  } else {
    feedbackText.textContent = "Your guess is too low.";
  }
});
