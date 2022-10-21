"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; //1 ile 20 arasında random sayı üretir.
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value); // Check btn click yapıldığında gueesdeki sayıyı konsola yazdırır.
  console.log(guess, typeof guess);

  if (!guess) {
    // Guess içindeki sayı kontrolü
    document.querySelector(".message").textContent = "No number!"; // Guess içinde sayı olmadığında No Number yazısı yazacak.
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!"; //Guess içindeki sayı ile random olan sayı aynı olduğunda Correct Number yazacak.
    document.querySelector(".number").textContent = secretNumber; // Random sayıyı number classına ekliyor.
    document.querySelector("body").style.backgroundColor = "#60b347"; // Correct number olduğunda arka plan rengi değişir.
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too high"; //Guess içindeki sayı random sayıdan büyükse Too high yazacak.
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too low"; //Guess içindeki sayı random sayıdan küçükse Too low yazacak.
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
