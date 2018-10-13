

var container = document.querySelector('.container'),
    choices = document.querySelector('.choices').children,
    display = document.querySelector('.display'),
    displaySelection = display.firstElementChild,
    displayResult = display.lastElementChild,
    playBtn = document.querySelector('.play');
    playerSelection = "";

Array.from(choices).forEach((btn) => addEventListener("click",playerChoice)); //get the player choice

function playerChoice(btn){
  Array.from(choices).forEach( e=> e.classList.remove('active') ); // reset the active class
    btn.target.classList.add("active");     // add active class to the chosen
    playerSelection = btn.target.getAttribute('value'); // declaring the player choice
    return playerSelection;  
}
function computerPlay(){
  let choices = ["scissor","rock","paper"]
  return choices[Math.floor(Math.random() * 3)]
}

let computer = 0,
    player   = 0,
    selections,
    result = "";

function playAgain() {
    playBtn.textContent = "Play again";
}

function draw(){
  result = "draw";
  displaySelection.textContent = "";
  displayResult.textContent = "It's a Draw!";
  playAgain();
}

function win() {
  result = "You Win!";
  displaySelection.textContent = selections;
  displayResult.textContent = result;
  player++;
  playAgain();
}

function lose() {
  result = "You Lose!";
  displaySelection.textContent = selections;
  displayResult.textContent = result;
  computer++;
  playAgain();
}

function instruction(msg = "") {
  result = msg;
  selections = ""
  displaySelection.textContent = selections;
  displayResult.textContent = result;
}

function oneRound(){
  let computerSelection = computerPlay();
      
  instruction("Make a choice"); 

  selections = `You : ${playerSelection} & Computer : ${computerSelection}` ; 

  if (playerSelection === computerSelection) { 
       draw();
  }
  else if (playerSelection === "rock" ) {
     if(computerSelection === "scissor") { 
        win();
     } else {
       lose();
     }
  } else if (playerSelection === "paper" ){
     if(computerSelection === "rock") {
        win();
     } else { 
        lose();
     } 
  } else if (playerSelection === "scissor") { 
      if(computerSelection === "paper") {
         win();
      } else {
         lose();
      }
  }
  
  document.querySelector(".score p:first-child span").textContent = player;
  document.querySelector(".score p:last-child span").textContent = computer;
}


