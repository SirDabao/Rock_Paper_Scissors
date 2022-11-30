let buttons=document.querySelectorAll("button");
let pcChoice=document.querySelector(".computer-choice");
let round=document.querySelector(".round-res");
let res=document.querySelector(".results");
res.style.cssText="font-size:25px; font-weight:bold;";
let winner_div=document.querySelector(".winner");
winner_div.style.cssText="font-size:30px; font-weight:bold;";
let playerScore=0;
let computerScore=0;
res.innerText=`Your score: ${playerScore}\nComputer score: ${computerScore}`;
buttons.forEach((btn)=>{btn.addEventListener("click",()=>
{game(btn);}
)});



function getComputerChoice() {
    let choiceNum=3*Math.random();
    if (choiceNum<1)
    return "Rock";
    else if(choiceNum<2)
    return "Paper";
    else return "Scissors";
}

function playRound(playerSelection,computerSelection)
{
    let playerSelectionComparable=playerSelection.substr(0,1).toUpperCase() + playerSelection.substr(1).toLowerCase();
    if(computerSelection===playerSelectionComparable)
    return `Both chose ${computerSelection}, it's a tie!`;
    else if(playerSelectionComparable==="Paper" && computerSelection==="Scissors")
    return "You Lose! Scissors beat Paper";
    else if(playerSelectionComparable==="Scissors" && computerSelection==="Paper")
    return "You Win! Scissors beat Paper";
    else{
        if(playerSelectionComparable<computerSelection)
        return `You Win! ${playerSelectionComparable} beats ${computerSelection}`;
        else
        return `You Lose! ${computerSelection} beats ${playerSelectionComparable}`;
    }
}

function game(btn) {
    let computerSelection=getComputerChoice();
    pcChoice.innerText=`Computer chose ${computerSelection}`;
    round.innerText=playRound(btn.innerText,computerSelection);
    if(round.innerText.includes("Win"))
    playerScore++;
    if(round.innerText.includes("Lose"))
    computerScore++;
    res.innerText=`Your score: ${playerScore}\nComputer score: ${computerScore}`;
    if(playerScore===5)
    {
    winner_div.style.color="green";
    winner_div.innerText="You Won the game!";
    }
    if(computerScore===5)
    {
        winner_div.style.color="red"; 
        winner_div.innerText="You Lost the game";
    }
}