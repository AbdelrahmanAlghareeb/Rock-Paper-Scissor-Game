

var container = document.querySelector('.container'),
    choices = document.querySelectorAll('.choices button'),
    playerSelection = "";

choices.forEach((btn)=> addEventListener("click",playerChoice)); //get the player choice

function playerChoice(btn){
  playerSelection = btn.target.getAttribute('value'); // declaring the player choice
  return playerSelection;  
}

