var board = [];
var currentPlayer = "White";
var totalRows = 8;
var totalCols = 8;

window.onload = function(){
	var boardElem = document.getElementById('board');
	boardElem.addEventListener("click", boardClicked, false);
	initBoard();
};

function initBoard(){
	var i, j;
	for (i=1; i<=totalRows; i++){
		$('tbody').append('<tr></tr>');
		for (j=1; j<=totalCols; j++){
			board[index(i,j)] = null;
			$('tbody tr:nth-child('+i+')').append('<td><div class="square"></div></td>');
		}
	}
	//initial placement of pieces
	board[index(4,4)]='White';
	board[index(4,5)]='Black';
	board[index(5,4)]='Black';
	board[index(5,5)]='White';

	$('#currentplayer-text').text('Current Turn Belongs To: '+currentPlayer);
	updateBoardPic();
	return 0;
}

function boardClicked(e){
	var x = e.clientX;
    var y = e.clientY;
    var validMove = false;

    var elementClicked = document.elementFromPoint(x, y);
    var index = $('.square').index(elementClicked);

    var square = getRowColFromIndex(index);
    var row = square[0];
    var col = square[1];

    //console.log('clicked on index: ', index, ' square: ', square)

    if (board[index]!= null){
    	//console.log('there is already a piece there')
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
    		board[index]=currentPlayer;
    		updateBoardPic();
    		currentPlayer = getOtherPlayer();
    		$('#currentplayer-text').text('Current Turn Belongs To: '+currentPlayer);
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
			if (board[index(i,j)]=="Black"){
				$('tbody tr:nth-child('+i+') :nth-child('+j+') :nth-child(1)').html('<div class="black piece"></div>');
			}
			if (board[index(i,j)]=="White"){
				$('tbody tr:nth-child('+i+') :nth-child('+j+') :nth-child(1)').html('<div class="white piece"></div>');
			}
		}
	}
	return 0;
}

function getOtherPlayer(){
	if (currentPlayer == 'White')
		return 'Black';
	else 
		return 'White';
}

function index(row,col){
	// gives index of element in board array, based on row and col numbers
	if (row<1)
		return null;
	if (col<1)
		return null;
	var arrayIndex = (row-1)*totalRows+col-1;
	return arrayIndex;
}

function getRowColFromIndex(index){
	var row = Math.ceil((index+1)/totalRows);
	var col = (index+1)%totalCols;
	if (col == 0)
		col = 8;
	return [row, col];
}



