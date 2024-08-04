'use strict';
/** 
console.log(document.querySelector('.message').textContent);
//document.querySelector("message"); <==== yeh wala part actually woh pura element de dega which will show contain the class message
// .textContent will show the text that the element contains of class "message"

document.querySelector('.message').textContent = '🎉Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').innerHTML = 20; //here we can write innerHTML or textContent both typically behaves in the same way that is accessing the inner text of the html element tag which is selected by selecting class using querySelector
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); //as this is an <input> element which has a class "guess" so that means actually the value will inputted by from the webpage and to get that value we need to write ".value"(i.e value property) to get value of this querySelectedELement
*/
//now since what we want is we want to get the guessed number that is written in the guess box to display in the console
//now we will achieve it using a dom property called EventListener

//first we will select the button of class 'check' of button element in line 20 of index.html
//document.querySelector(".check");
//then addEventListener
//document.querySelector('.check').addEventListener('click', function () { });//since addEventListener is a type of property or function where we specify what event should you listen to (for example here i have specified it to listen to "click") but after click what should happen that also we need to specify using another function that is a callback function that means when the event clicked has happened it call the callback function and do the work
//                                                           ↪ this is a callback fucntion and this will be an anonymous fucntion

let secretNumber = Math.trunc(Math.random() * 20) + 1; //number to be guessed btw 1 to 20
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value); //this line gets activated when click happens and reads the input value to console
  const guess = Number(document.querySelector('.guess').value); //as number comes from input field but every input from input area comes a string so this is why we need to convert it to number()
  console.log(guess, typeof guess);
  //when there is no number given to input area then we get the value as 0
  //and we can use it to implement that there was no entry
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    //with this else if we will check if the guessed no is below or above the secret number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';

    //we have used this if statement because agar score 0 hit kar jaaye toh uska highscore toh jo pehle woh jeeta tha whi na rhega so isiliye
    if (score > highscore) {
      highscore = score; // as soon as player high score will be set to score where he guessed right
      document.querySelector('.highscore').textContent = highscore;
    }
    //
    //actually we want to display the secretNumber only during the correctGuess
    document.querySelector('.number').textContent = secretNumber;
    //
    //to change the css style
    //here we have selected the whole body as it will change the whole background of the body
    document.querySelector('body').style.backgroundColor = '#60b347'; //we need to write it in string after =
    //whenever we are manipulating a style we always need to specify in this string
    document.querySelector('.number').style.width = '30rem';
    //
    //
    //
    //
    //actually we need something like if score reaches 0 it should imply that we have lost
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈Too High';
      score--; //if guess is wrong then score decreases
      document.querySelector('.score').textContent = score; //score to be displayed in webpage
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '💥YOU HAVE LOST';
    document.querySelector('.score').textContent = 0;
  }
});

//we need to implement the again functionality button
document.querySelector('.again').addEventListener('click', function () {
  //Initials conditions being set by these codes
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = ''; //phirse empty string pe isiliye set kyunki again button dabane par usme pichla wala number na reh jaye

  secretNumber = Math.trunc(Math.random() * 20) + 1; //reassign the secretNumber
});
