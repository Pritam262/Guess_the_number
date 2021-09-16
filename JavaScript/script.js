"use strict";
let secretenumber = Math.floor(Math.random() * 20 + 1);
let score = (document.querySelector(".score").textContent = 20);
let guess = (document.querySelector("#guess").value = "");
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
displayMessage("Start questioning....");
document.querySelector("#check").addEventListener("click", function () {
  const guess = Number(document.querySelector("#guess").value);
  //When there is no input
  if (!guess) {
    displayMessage("🚫 No number ");
  }
  //When player wins
  else if (guess === secretenumber) {
    displayMessage("Correct Number");
    document.querySelector(".number").style.width = "4rem";

    document.querySelector(".number").textContent = secretenumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is Wrorng
  else if (guess !== secretenumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      // guess > secretenumber ? "Two high" : "Too low";
      displayMessage(guess > secretenumber ? "Two high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You loosing the game..");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// reset the game
document.querySelector(".again").addEventListener("click", function () {
  displayMessage("Start questioning....");
  score = document.querySelector(".score").textContent = 20;
  secretenumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  document.querySelector("#guess").value = "";
  document.querySelector(".number").textContent = "?";
});
