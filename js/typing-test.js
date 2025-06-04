const testText = "Typing tests help improve your speed and accuracy. Keep practicing regularly!";
const testTextElement = document.getElementById("test-text");
const inputArea = document.getElementById("input-area");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");

let startTime;
let isStarted = false;

window.onload = () => {
  testTextElement.textContent = testText;
};

inputArea.addEventListener("input", () => {
  if (!isStarted) {
    isStarted = true;
    startTime = new Date();
  }

  const enteredText = inputArea.value;
  const elapsedTime = (new Date() - startTime) / 1000 / 60; // in minutes

  const wordsTyped = enteredText.trim().split(/\s+/).length;
  const wpm = Math.round(wordsTyped / elapsedTime);

  let correctChars = 0;
  for (let i = 0; i < enteredText.length; i++) {
    if (enteredText[i] === testText[i]) {
      correctChars++;
    }
  }

  const accuracy = Math.round((correctChars / enteredText.length) * 100);

  wpmDisplay.textContent = isNaN(wpm) ? 0 : wpm;
  accuracyDisplay.textContent = isNaN(accuracy) ? 100 : accuracy;
});
