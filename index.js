const scoreEl = document.getElementById("score");
const userPick = document.getElementById("user-pick");
const housePick = document.getElementById("house-pick");
const restartBtn = document.getElementById("restart-btn");
const choicesEl = document.querySelectorAll(".circle");

const choices = ["rock", "paper", "scissors"];

function chooseRandom() {
   return choices[Math.floor(Math.random() * 3)];
}

choicesEl.forEach((choice) => {
   choice.addEventListener("click", (event) => {
      if (userPick.classList.contains("placeholder")) {
         const userChoice = event.currentTarget.dataset.choice;
         userPick.classList.remove("placeholder");
         userPick.classList.add("large-circle", userChoice);
         userPick.innerHTML = `<img src="./images/icon-${userChoice}.svg">`;

         const houseChoice = chooseRandom();
         housePick.classList.remove("placeholder");
         housePick.classList.add("large-circle", houseChoice);
         housePick.innerHTML = `<img src="./images/icon-${houseChoice}.svg">`;
      }
   });
});

restartBtn.addEventListener("click", () => {
   housePick.innerHTML = "";
   housePick.classList = "placeholder";
   userPick.innerHTML = "";
   userPick.classList = "placeholder";
});
