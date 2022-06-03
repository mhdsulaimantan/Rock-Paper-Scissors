let moves = ["Rock", "Paper", "Scissors"]; 

window.onload = function(){ 
    let buttons = document.getElementsByTagName("button");
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(event){
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].style.pointerEvents = "none";
            }
            result(buttons[i]);
        });
    }
}

function backgroundChange(btn){
    btn.style.backgroundColor = "lightgreen";
}

function computerPick(){
    let pick = moves[Math.floor(Math.random()*moves.length)];
    if (pick === "Rock"){
        document.getElementById("rock-move").style.backgroundColor = "lightgray";
    }

    else if (pick === "Paper"){
        document.getElementById("paper-move").style.backgroundColor = "lightgray";
    }

    else if (pick === "Scissors"){
        document.getElementById("scissors-move").style.backgroundColor = "lightgray";
    }

    return pick;
}

function userPick(btn){
    if(btn.id === "rock-btn") return "Rock";
    else if (btn.id === "paper-btn") return "Paper";
    else if (btn.id === "scissors-btn") return "Scissors";
}

function result(btn){
    backgroundChange(btn);
    let result = document.getElementById("result");
    let para = document.getElementById("result-para");
    let resetButton = document.getElementById("reset-btn");

    let user = userPick(btn);
    let computer = computerPick();

    if(user === computer){
        para.textContent = "Draw";
        result.style.backgroundColor = "gray";
    }
    else if((user === "Paper" && computer === "Rock") || 
            (user === "Rock" && computer === "Scissors") ||
            (user === "Scissors" && computer === "Paper")){
                para.textContent = "You Won";
                result.style.backgroundColor = "lightgreen";   
            }
    else{
        para.textContent = "You Lose";
        result.style.backgroundColor = "red";
    }
    
    resetButton.style.visibility = "visible";
    resetButton.style.pointerEvents = "all";
    resetButton.addEventListener('click', function(event){
        location.reload();
    });
}

