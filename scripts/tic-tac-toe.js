var winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], //horizontals
    [0,3,6], [1,4,7], [2,5,8], //verticals
    [0,4,8], [2,4,6]];         //diagonals

var gamePos = ["","","","","","","","",""];
var gameLive = true;
var currPlayer = "X";
const status = document.querySelector('.status');

const currPlayerTurn = () => `It is ${currPlayer}'s turn`;      //lambda expressions
const winMessage = () =>`Player ${currPlayer} has won!`;
const drawMessage = () =>`The game is a draw.`;

status.innerHTML = currPlayerTurn();


function ClickSquare(clickedSquareEvent){
    var clickedSquare = clickedSquareEvent.target;  //Easier way to find clicked square
    var squareIndex = parseInt(clickedSquare.getAttribute('data-cell-index')); //gets squares' index from the data cell attribute
    if(gamePos[squareIndex] !== "" || !gameLive){
        return;
    }
    else{
        UpdateSquare(clickedSquare, squareIndex);
        CheckResult();
    }
}
function UpdateSquare(clickedSquare, squareIndex){
    gamePos[squareIndex] = currPlayer;
    clickedSquare.innerHTML = currPlayer;
}
function CheckResult(){
    var winRound = false;
    for(let i=0;i<=7;i++){
        var currwinState = winningCombos[i];
        var a = gamePos[currwinState[0]];
        var b = gamePos[currwinState[1]];
        var c = gamePos[currwinState[2]];
        if(a===''||b===''||c===''){
            continue; //skips 1 iteration
        }
        if(a===b && b===c){
            winRound = true;
            break;
        }
    }
    if(winRound){
        status.innerHTML = winMessage();
        gameLive = false;
        return;
    }
    else if(!gamePos.includes("")){
        status.innerHTML = drawMessage();
        gameLive = false;
        return;
    }
    changePlayer();
}
function changePlayer(){
    if(currPlayer==="X"){
        currPlayer="O";
    }
    else{
        currPlayer="X";
    }
    status.innerHTML = currPlayerTurn();
}


document.querySelectorAll('.square').forEach(square =>square.addEventListener('click',ClickSquare));

