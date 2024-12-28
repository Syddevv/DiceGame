const guessInput = document.getElementById("numberDropdown");
const rollButton = document.getElementById("roll-button");
const scoreDisplay = document.getElementById("score");
const playerGuessResult = document.getElementById("player-guess-result");
const diceResult = document.getElementById("number-result");
const imageContainer = document.getElementById("image-container");
let score = 0;

rollButton.addEventListener("click", () => {
  let randomDice = Math.floor(Math.random(diceResult) * 6) + 1;
  let guess = guessInput.value;
  guess = Number(guess);

  if (guess === randomDice) {
    playerGuessResult.textContent = "YOU WIN!";
    score++;
  } else {
    playerGuessResult.textContent = "YOU LOSE!";
  }

  diceResult.textContent = `Result: ${randomDice}`;
  scoreDisplay.textContent = `Score: ${score}`;

  imageContainer.innerHTML = `<img id="image-result" src="dice/${randomDice}.png" alt="" />`;
});
