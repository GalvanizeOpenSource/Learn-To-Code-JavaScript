var randomNum = Math.random();
var computerThrow = " ";


if (randomNum <= 0.33) {
    computerThrow = "rock";
  } else if (randomNum <= 0.66) {
    computerThrow = "paper";
  } else {
    computerThrow = "scissors";
  }





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
};

console.log(compare (userThrow, computerThrow));
