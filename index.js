const scoreEl = document.getElementById("score");
const userPick = document.getElementById("user-pick");
const housePick = document.getElementById("house-pick");
const restartBtn = document.getElementById("restart-btn");
const resultEl = document.getElementById("result");
const choicesEl = document.querySelectorAll(".circle");

const choices = ["rock", "paper", "scissors"];

function chooseRandom() {
   return choices[Math.floor(Math.random() * 3)];
}

function clearEl(element) {
   element.innerHTML = "";
   element.classList = "placeholder";
}

choicesEl.forEach((choice) => {
   choice.addEventListener("click", (event) => {
      // set users pick
      const userChoice = event.currentTarget.dataset.choice;
      clearEl(userPick);

      setTimeout(() => {
         userPick.classList.add("large-circle", userChoice);
         userPick.innerHTML = `<img src="./images/icon-${userChoice}.svg">`;
      }, 300);

      // set houses pick
      const houseChoice = chooseRandom();
      clearEl(housePick)
      setTimeout(() => {
         housePick.classList.add("large-circle", houseChoice);
         housePick.innerHTML = `<img src="./images/icon-${houseChoice}.svg">`;
      }, 400);

      // determine outcome
      if (userChoice === houseChoice) {
         resultEl.textContent = "It's a Tie!!";
      } else if (
         (userChoice == "rock" && houseChoice == "scissors") ||
         (userChoice == "paper" && houseChoice == "rock") ||
         (userChoice == "scissors" && houseChoice == "paper")
      ) {
         resultEl.textContent = "You win!!";
      } else {
         resultEl.textContent = "You lose 🥺";
      }
   });
});

restartBtn.addEventListener("click", () => {
   clearEl(housePick);
   clearEl(userPick);
});
