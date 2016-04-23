# Learn to Code JavaScript!

Brought to you by Galvanize. Learn more about the way we teach code at [galvanize.com](http://galvanize.com).

### Overview

In this course, we'll be going over the following!

- Basic syntax of JavaScript
- Variables and Functions
- Conditional statements (if, else if, else)
- Build a “Rock, Paper, Scissors” application

While not required, reviewing our [HTML & CSS](https://github.com/GalvanizeOpenSource/Learn-To-Code-HTML-CSS) course can help!

### Setting Up Your Computer

For this workshop, you need to have the following:

- Install a text editor! We recommend [Atom.io](http://atom.io)
- Have an updated web browser! We recommend [Google Chrome](http://chrome.google.com)

### What IS JavaScript?

Making its first appearance in 1995, JavaScript was created by an engineer at Netscape to provide a user-friendly, lightweight programming language that can be easily adapted for the rise of the Internet. Now, with HTML and CSS, it is one of the core languages of the Internet and is growing quickly to accommodate beyond the client-side.

With JS allows web pages to do more than just “sit there." You can animate, calculate, etc. - you can do it all! 
It is a great programming bridge between “design” and “development” that allows for endless creativity.

Common confusion: *Java* is NOT *JavaScript*. They are largely different programming languages and should not be confused with one another.

### A Quick Mini-Tutorial

In order to go over some basic JavaScript concepts lets follow the getting
started tutorial provided by the [JavaScript.com](http://chrome.google.com) team. 

It's only 8 lessons and takes less than 5 minutes.

(https://www.javascript.com/try)

### Dive a Little Deeper

Let's review some of the basic syntax of JavaScript.



###HOORAY VOCABULARY!

- functions
- if statements
- variables




###Rock Paper Scissors!

We want to write a program called rockPaperScissors.js so we can play rock paper
scissors with our computer! Here are the steps we'll need to take to make that happen:

1. Get a user's choice
1. Get the computer's choice
1. Teach the computer how to guess rock, paper, or scissors
1. Compare their choices and tell the user the result


###1.Get the user's choice

The ```prompt``` method gets input from the user, ```prompt``` has an optional message parameter which you can use to ask the user for a response.

```javascript
var userChoice = prompt("Do you choose rock, paper or scissors?");
```

This line creates a variable called ```userChoice``` to represent the users response.

Question: Why is this a crap way to get the users input?

###2.Get the computers choice
```Math.random()``` returns a random floating point number between 0 and 1

```javascript
var computerChoice = Math.random();
```

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



###4. Compare the choices and tell the user of the result.
Here we're creating a function called ```compare```. The ```compare``` function takes two
arguments ```choice1``` and ```choice2```.

```javascript
var compare = function(userChoice, computerChoice) {
    if (userChoice  === computerChoice) {
        window.alert("The result is a tie!");
    } else if(userChoice === "rock") {
        if (computerChoice === "scissors") {
            window.alert("Rock wins!");
        } else {
            window.alert("Paper wins");
        }
    } else if(userChoice === "paper") {
        if(computerChoice === "rock") {
            window.alert("paper wins!");
        } else {
            window.alert("scissors wins!");
        }
    } else if(userChoice === "scissors") {
        if (computerChoice === "rock") {
            window.alert("Rock wins");
        } else {
            window.alert("scissors wins");
        }
    }
};
```


###5. Calling the compare function
 We're passing values of userChoice and computerChoice to run the equation. The
 function is called when someone clicks the button via the ```onclick``` attribute!

```html
<button class="button" onclick="compare(userChoice, computerChoice);">LETS PLAY RPS!</button>
```

### Play around in the sandbox some more!

- "I want to play the game again. Make a button I can press to play again!"
- "When I win, I want the game to congratulate me by my name!"
- "I don't ever want to lose. Make it so I always win."
- "I want the JavaScript code to work on other HTML files. How do I do this?"


About the Authors

Graham McBain is a graduate of the 3rd cohort of the Galvanzie Full Stack Program and now Evangelist for Galvanize based in the Colorado area. Graham believes that programming is more accessible than people think and is passionate about showing people the path to becoming a developer.

Lee Ngo is an evangelist for Galvanize based in Seattle. Previously he worked for UP Global (now Techstars) and founded his own ed-tech company in Pittsburgh, PA. Lee believes in learning by doing, engaging and sharing, and he teaches code through a combination of visual communication, teamwork, and project-oriented learning.

You can email him at lee.ngo@galvanize.com for any further questions.
