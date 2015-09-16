var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
    return "The result is a tie!";
} else if(choice1 ==="rock") {
    if (choice2==="scissors") {
    return "who wins";
} else {
    return "who wins";
        }
    }
   else if(choice1==="paper") {
       if(choice2 ==="rock") {
           return "who wins";
       } else {
           return "who wins";
       }
   }

    else if(choice1==="scissors") {
        if (choice2==="rock") {
            return "who wins";
        } else {
            return "who wins";
        }
    }

};

compare(userChoice, computerChoice);
