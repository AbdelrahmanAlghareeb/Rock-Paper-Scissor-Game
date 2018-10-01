
function computerPlay(){
  let choices = ["scissor","rock","paper"]
  return choices[Math.floor(Math.random() * 3)]
}

let computer = 0,
    player   = 0;
var result = "";

function oneRound(){
  let computerSelection = computerPlay(),
      playerSelection = prompt("scissor, rock or paper .. ? ").toLowerCase();
      console.log(`You : ${playerSelection} and Computer : ${computerSelection}` );
  if (playerSelection == computerSelection) { 
    alert("Draw");
    oneRound();
  }
  else if (playerSelection == "rock" ) {
     if(computerSelection == "scissor") { 
       player++; 
       return "Wow, You win.."; 
     } else {
       computer++; 
       return "Hahaha Loser, Paper beats rock";
     }
  } else if (playerSelection == "paper" ){
     if(computerSelection == "rock") {
       player++; 
       return "Wow, You win.."; 
     } else { 
       computer++; 
       return "Hahaha Loser, scissor beats paper";
     } 
  } else { 
      if(computerSelection == "paper") {
        player++;
        return "Wow, You win..";
        else {
        computer++;
        return "Hahaha Loser, rock beats scissor";
          }
      }
  }
}    