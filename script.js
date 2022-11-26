game();


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

function game() {
    let playerScore=0;
    let computerScore=0;
    for (let i=0 ; i<5 ; i++)
    {
        let playerSelection=prompt("Enter your Rock, Paper, Scissors choice");
        let computerSelection=getComputerChoice();
        console.log(`Computer chose ${computerSelection}`);
        let res=playRound(playerSelection,computerSelection);
        console.log(res);
        if(res.includes("Win"))
        playerScore++;
        if(res.includes("Lose"))
        computerScore++;
    }
    console.log(`Your final score: ${playerScore}\nFinal computer score: ${computerScore}`);
    if(playerScore>computerScore)
    console.log("You Won the game!")
    else if(playerScore==computerScore)
    console.log("It's a tie!");
    else
    console.log("You Lost the game");
}