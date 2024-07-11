const quizForm = document.getElementById('quiz-form');
const answerOptions = document.getElementById('answer-options');
const correctSelect = document.getElementById('correct');

function addAnswer() {
  const newAnswer = document.createElement('input');
  newAnswer.type = 'text';
  newAnswer.name = `answer${answerOptions.childElementCount + 1}`;
  newAnswer.required = true;
  newAnswer.placeholder = `Answer ${answerOptions.childElementCount + 1}`;
  answerOptions.appendChild(newAnswer);
  answerOptions.appendChild(document.createElement('br'));
  updateCorrectOptions();
}

function updateCorrectOptions() {
  correctSelect.innerHTML = "";
  for (let i = 1; i <= answerOptions.childElementCount - 1; i++) {
    const option = document.createElement('option');
    option.value = `answer${i}`;
    option.text = `Answer ${i}`;
    correctSelect.appendChild(option);
  }
}

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  alert("Quiz created successfully!");

  quizForm.reset();
  answerOptions.innerHTML = `
    <label for="answer1">Answer 1:</label><br>
    <input type="text" id="answer1" name="answer1" required><br>
    <label for="answer2">Answer 2:</label><br>
    <input type="text" id="answer2" name="answer2" required><br>
  `;
  updateCorrectOptions();
});

updateCorrectOptions(); 