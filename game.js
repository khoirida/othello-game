

var board = [];
var players = ["black","white"]
var currentPlayer = "white";
var totalRows = 8;
var totalCols = 8;

window.onload = function(){
	var boardElem = document.getElementById('board');
	boardElem.addEventListener("click", boardClicked, false);
	initBoard();
};

function index(row,col){
	if (row<1)
		return null;
	if (col<1)
		return null;
	var arrayIndex = (row-1)*totalRows+col-1;
	return arrayIndex;
}

function initBoard(){
	var i, j;
	for (i=1; i<=totalRows; i++){
		for (j=1; j<=totalCols; j++){
			board[index(i,j)] = null;
		}
	}
	board[index(4,4)]='white';
	board[index(4,5)]='black';
	board[index(5,4)]='black';
	board[index(5,5)]='white';



	// board[index(4,6)]='black';

	// board[index(3,6)]='black';

	// board[index(2,6)]='white';

	//board[]='black';
	$('#currentplayer-text').text('It is '+currentPlayer+'\'s turn');
	updateBoardPic();
	return 0;
}

function boardClicked(e){
	var x = e.clientX;
    var y = e.clientY;
    var validMove = false;

    console.log('board clicked on positions', x,y)
    var square = calcSquareFromPixel (x,y);
    console.log('square:', square)
    var row = square[0];
    var col = square[1];

    if (board[index(row,col)]!= null){
    	console.log('there is already a piece there')
    }
    else{

    	if (checkNLine(row,col))
    		validMove = true;
    	if (checkSLine(row,col))
    		validMove = true;
    	if (checkWLine(row,col))
    		validMove = true;
    	if (checkELine(row,col))
    		validMove = true;
    	if (checkNWLine(row,col))
    		validMove = true;
    	if (checkSELine(row,col))
    		validMove = true;
    	if (checkNELine(row,col))
    		validMove = true;
    	if (checkSWLine(row,col))
    		validMove = true;

    	if (validMove){
    		board[index(row,col)]=currentPlayer;
    		updateBoardPic();
    		currentPlayer = getOtherPlayer();
    		$('#currentplayer-text').text('It is '+currentPlayer+'\'s turn');
    	}
    	else{
    		alert('Invalid move!')
    	}
    }
}

function checkNLine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row--; 
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

function checkSLine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row++; 
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

function checkWLine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		col--; 
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

function checkELine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		col++; 
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

function checkNWLine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row--; 
		col--;
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

function checkSELine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row++;
		col++;
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

function checkNELine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row--;
		col++; 
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

function checkSWLine(row, col){
	var continuous = true;
	var otherPlayer = getOtherPlayer();
	var line = [];
	while (continuous){
		row++;
		col--; 
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
	return 0;
}

function updateBoardPic(){
	for (var i=1; i<=totalRows; i++){
		for (var j=1; j<=totalCols; j++){
			if (board[index(i,j)]=="black"){
				$('tbody tr:nth-child('+i+') :nth-child('+j+') :nth-child(1)').html('<div class="square"><div class="black piece"></div></div>');
			}
			if (board[index(i,j)]=="white"){
				$('tbody tr:nth-child('+i+') :nth-child('+j+') :nth-child(1)').html('<div class="square"><div class="white piece"></div></div>');
			}
		}
	}
	return 0;
}

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


