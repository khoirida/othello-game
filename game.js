

var board = [];
var players = ["black","white"]
var currentPlayer = "white";
var totalRows = 8;
var totalCols = 8;

$('document').ready(function(){
	var boardElem = document.getElementById('board');
	boardElem.addEventListener("click", boardClicked, false);
	initBoard();
});

function index(row,col){
	if (row<1)
		return null;
	if (col<1)
		return null;
	var arrayIndex = (row-1)*totalRows+col-1;
	return arrayIndex;
}

function initBoard(){

	//TODO: add the beginning pieces
	var i, j;
	for (i=1; i<=totalRows; i++){
		for (j=1; j<=totalCols; j++){
			board[index(i,j)] = null;
		}
	}

	board[index(4,6)]='black';

	board[index(3,6)]='black';

	board[index(2,6)]='black';

	//board[]='black';
	return;
}

function boardClicked(e){
	var x = e.clientX;
    var y = e.clientY;

    console.log('board clicked on positions', x,y)
    var square = calcSquareFromPixel (x,y);
    console.log('square:', square)
    var row = square[0];
    var col = square[1];

    if (board[index(row,col)]!= null){
    	console.log('there is already a piece there')
    }
    else{
    	checkNLine(row, col);
    }
    // if the turn was okay then switch players
    currentPlayer = getOtherPlayer();
}

function checkNLine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row--; 
		console.log('row is now: ', row)
		var i = index(row, col);
		if (i==null) //gone off the board
			return false;
		else if (board[i]==otherPlayer){
			line.push(i);
		}
		else
			continuous = false;
	}
	if (line.length>0){
		if (board[i]==currentPlayer){ 
			flipPieces(line);
			return true;
		}
	}
	return false;
}

function flipPieces(line){
	for (var i=0; i<line.length; i++){
		board[line[i]] = currentPlayer;
	}
	//updateBoardPic();
	//return;
}

// function updateBoardPic(){

// 	return;
// }

function getOtherPlayer(){
	if (currentPlayer == 'white')
		return 'black';
	else 
		return 'white';
}

function calcSquareFromPixel(x,y){
	//TODO: need to make better
	var square = [];

	//the square class is set to be 54 X 54 in game.css
	//that means each square + default html spacing is actually 60 X 60

	square[0] = Math.ceil(y/60);
	square[1] = Math.ceil(x/60);
	return square;
}


