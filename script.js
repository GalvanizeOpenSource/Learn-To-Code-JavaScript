// Note: place this solution in between the <script></script> tags in your index.html file

function runGame() {

// 1. Get the user's name
  var userName = prompt("What is your name?");

// 2. Get the user's throw: either rock, paper, or scissors
  var userThrow = prompt("Rock, Paper, or Scissors?")

// 3. Have the computer generate a random number between 0.01-0.99.
  var randomNum = Math.random();

  var computerThrow = "";

// 4. Use a conditional statement to assign rock, paper, and scissors to the computer's random number
  if (randomNum <= 0.33) {
    computerThrow = "rock";
  } else if (randomNum <= 0.66) {
    computerThrow = "paper";
  } else {
    computerThrow = "scissors";
  }

// 5. Compare the user's choice and computer's choice, and tell the user who won
  var compare = function (userThrow, computerThrow) {
    if (userThrow === computerThrow) {
      window.alert("The result is a tie!")
    } else if (userThrow === "rock") {
      if(computerThrow === "scissors"){
        window.alert("Rock beats scissors! " + userName + " wins!")
      } else {
        window.alert("Paper beats rock! The computer wins!")
      }
    } else if (userThrow === "paper") {
      if(computerThrow === "scissors") {
        window.alert("Scissors beats paper! The computer wins!")
      } else if (computerThrow === "rock") {
        window.alert("Paper beats rock!" + userName + " wins!")
      }
    } else if (userThrow === "paper") {
      if(computerThrow === "rock") {
        window.alert("Paper beats rock! " + userName + " wins!")
      } else if (computerThrow === "scissors") {
        window.alert("Scissors beats paper! The computer wins!")
      }
    }
  }
  compare(userThrow, computerThrow)
};
