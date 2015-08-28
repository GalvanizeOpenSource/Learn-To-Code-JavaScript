# Learn-to-code-week3
Basic JavaScript and jQuery

In order to go over some basic JavaScript concepts lets follow the getting
started tutorial provided by the JavaScript team.

https://www.javascript.com/try

We want to write a program called rockPaperScissors.js so we can play rock paper
scissors with our computer! Here are the steps we'll need to take to make that happen:
    
1. Get a user's choice
1. Get the computer's choice
1. Teach the computer how to guess rock, paper, or scissors
1. Compare their choices and tell the user the result


###1.Get the user's choice

The ```prompt``` method gets input from the user, ```prompt``` has an optional message parameter which you can use to ask the user for a response.

```var userChoice = prompt("Do you choose rock, paper or scissors?");```

This line creates a variable called ```userChoice``` to represent the users response.

###2.Get the computers choice
```Math.random()``` returns a random floating point number between 0 and 1

```var computerChoice = Math.random();```

Here we are setting a variable named ```computerChoice``` to the result of Math.random()


###3. Teach the computer rock, paper, scissors.
This is our first conditional statement. We change the value of ```computerChoice```
to either rock, paper, or scissors depending on what number the ```computerChoice```
variable gets set to when we run the program. Computers don't speak english so
we need to speak in a language they understand, numbers.

```javascript
if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
```

//At this point the computer is ready to rumble with it's choice, and the user
//has made theirs. IT'S GO TIME!!!
//Not so fast bub, first we need to tell the computer how to decide who wins. In
//order to do that we're going to need to create a function!



###4.Compare the choices and tell the user of the result.
Here we're creating a function called ```compare```. The ```compare``` function takes two
arguments ```choice1``` and ```choice2```.

```javascript
var compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    return "?"; //What should the program return when the above statement evaluates to true?
  } else if(choice1 ==="rock") {
    if (choice2 === "scissors") {
      return "?"; //What should the program return when the above statement evaluates to true?
    } else {
      return "?";  //What should the program return when the above statement evaluates to true?
    }
  }
  else if(choice1 === "paper") {
     if(choice2 === "rock") {
         return "?";  //What should the program return when the above statement evaluates to true?
     } else {
         return "?";  //What should the program return when the above statement evaluates to true?
     }
  }

  else if(choice1 === "scissors") {
    if (choice2 === "rock") {
      return "rock wins";
    } else {
      return "scissors wins";
    }
  }
};
```

Here we are calling the compare function above, we're passing values of userChoice
and computerChoice to run the equation

```compare(userChoice, computerChoice);```
