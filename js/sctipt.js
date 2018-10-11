

var container = document.querySelector('.container'),
    choices = document.querySelectorAll('.choices button'),
    playerSelection = "";

choices.forEach((btn)=> addEventListener("click",playerChoice)); //get the player choice

function playerChoice(btn){
  playerSelection = btn.target.getAttribute('value'); // declaring the player choice
  choices.forEach(btn=> btn.classList.remove('active')); // reset the active class
  btn.target.classList.add("active");     // add active class to the chosen
  return playerSelection;  
}

