function Player(mark) {
  this.mark = mark;
};

function Space(z, x, y) {
  this["x-coordinate"] = x;
  this["y-coordinate"] = y;
  this["z-coordinate"] = z;
  this.coordinates = [z, x, y];
  this.available = true;
  this.markedBy = null;
};

Space.prototype.mark = function(player) {
  if (this.available === true) {
    this.available = false;
    this.markedBy = player.mark;
  }
}

function Board() {
  this.spaces = [];
  for (var x = 1; x < 4; x++) {
    for (var y = 1; y < 4; y++) {
      for (var z = 1; z < 4; z++) {
        this.spaces.push(new Space(z, y, x));
      }
    }
  }
  this.winner = false;
}

Board.prototype.findSpace = function(z, y, x) {
  for(var i = 0; i < this.spaces.length; i++) {
    if (this.spaces[i]['z-coordinate'] === z && this.spaces[i]['x-coordinate'] === x && this.spaces[i]['y-coordinate'] === y) {
      return this.spaces[i];
    }
  }
}

Board.prototype.availableSpaces = function() {
  var available = [];
  for(var i = 0; i < this.spaces.length; i++) {
    if (this.spaces[i].available == true) {
      available.push(this.spaces[i]);
    }
  }
  return available;
}

Board.prototype.checkForWinner = function(player) {
  var result = false
  for(var i = 0; i < paths.length; i++) {
    var first = paths[i][0];
    var second = paths[i][1];
    var third = paths[i][2];
    if (this.findSpace(first[0],first[1],first[2]).markedBy == this.findSpace(second[0],second[1],second[2]).markedBy && this.findSpace(second[0],second[1],second[2]).markedBy == this.findSpace(third[0],third[1],third[2]).markedBy && this.findSpace(third[0],third[1],third[2]).markedBy == player.mark) {
      result = true;
    }
  }
  return result;
}

function Game () {
  var board = new Board;
  this.board = board;
  this.player = new Player("X");
  this.playersMoves = [];
  this.computer = new Player("O");
  this.computersMoves = [];
  this.gameOver = false;
}

Game.prototype.turn = function(z, x, y) {
  if (this.board.findSpace(z, x, y).available) {
    this.board.findSpace(z, x, y).mark(this.player);
    this.playersMoves.push(this.board.findSpace(z, x, y));
  } else {
    return;
  }
  if (this.board.checkForWinner(this.player) || this.board.availableSpaces.length === 0) {
    this.gameOver = true;
  }
  var a = Math.floor(Math.random()*3)+1;
  var b = Math.floor(Math.random()*3)+1;
  var c = Math.floor(Math.random()*3)+1;
  var compMove = this.board.findSpace(a, b, c);
  if (compMove.available) {
    compMove.mark(this.computer);
    this.computersMoves.push(compMove);
  }
  if (this.board.checkForWinner(this.computer) || this.board.availableSpaces.length === 0) {
    this.gameOver = true;
  }
}

var paths = [];
paths[0] = [[1,1,1],[2,1,1],[3,1,1]];
paths[1] = [[1,2,1],[2,2,1],[3,2,1]];
paths[2] = [[1,3,1],[2,3,1],[3,3,1]];
paths[3] = [[1,1,1],[1,2,1],[1,3,1]];
paths[4] = [[2,1,1],[2,2,1],[2,3,1]];
paths[5] = [[3,1,1],[3,2,1],[3,3,1]];
paths[6] = [[1,1,1],[2,2,1],[3,3,1]];
paths[7] = [[3,1,1],[2,2,1],[1,3,1]];

paths[8] = [[1,1,2],[2,1,2],[3,1,2]];
paths[9] = [[1,2,2],[2,2,2],[3,2,2]];
paths[10] = [[1,3,2],[2,3,2],[3,3,2]];
paths[11] = [[1,1,2],[1,2,2],[1,3,2]];
paths[12] = [[2,1,2],[2,2,2],[2,3,2]];
paths[13] = [[3,1,2],[3,2,2],[3,3,2]];
paths[14] = [[1,1,2],[2,2,2],[3,3,2]];
paths[15] = [[3,1,2],[2,2,2],[1,3,2]];

paths[16] = [[1,1,3],[2,1,3],[3,1,3]];
paths[17] = [[1,2,3],[2,2,3],[3,2,3]];
paths[18] = [[1,3,3],[2,3,3],[3,3,3]];
paths[19] = [[1,1,3],[1,2,3],[1,3,3]];
paths[20] = [[2,1,3],[2,2,3],[2,3,3]];
paths[21] = [[3,1,3],[3,2,3],[3,3,3]];
paths[22] = [[1,1,3],[2,2,3],[3,3,3]];
paths[23] = [[3,1,3],[2,2,3],[1,3,3]];

paths[24] = [[1,1,1],[1,1,2],[1,1,3]];
paths[25] = [[2,1,1],[2,1,2],[2,1,3]];
paths[26] = [[3,1,1],[3,1,2],[3,1,3]];
paths[27] = [[1,2,1],[1,2,2],[1,2,3]];
paths[28] = [[2,2,1],[2,2,2],[2,2,3]];
paths[29] = [[3,2,1],[3,2,2],[3,2,3]];
paths[30] = [[1,3,1],[1,3,2],[1,3,3]];
paths[31] = [[2,3,1],[2,3,2],[2,3,3]];
paths[32] = [[3,3,1],[3,3,2],[3,3,3]];

paths[33] = [[1,1,1],[1,2,2],[1,3,3]];
paths[34] = [[2,1,1],[2,2,2],[2,3,3]];
paths[35] = [[3,1,1],[3,2,2],[3,3,3]];

paths[36] = [[1,3,1],[1,2,2],[1,1,3]];
paths[37] = [[2,3,1],[2,2,2],[2,1,3]];
paths[38] = [[3,3,1],[3,2,2],[3,1,3]];

paths[39] = [[1,1,1],[2,1,2],[3,1,3]];
paths[40] = [[1,2,1],[2,2,2],[3,2,3]];
paths[41] = [[1,3,1],[2,3,2],[3,3,3]];

paths[42] = [[3,1,1],[2,1,2],[1,1,3]];
paths[43] = [[3,2,1],[2,2,2],[1,2,3]];
paths[44] = [[3,3,1],[2,3,2],[1,3,3]];

paths[45] = [[1,1,1],[2,2,2],[3,3,3]];
paths[46] = [[1,3,1],[2,2,2],[3,1,3]];
paths[47] = [[3,1,1],[2,2,2],[1,3,3]];
paths[48] = [[3,3,1],[2,2,2],[1,1,3]];


$(document).ready(function(){
  var newGame = new Game;
  $('div.space').click(function(event){
    var input = event.target.id.split(', ');
    var z = parseInt(input[0]);
    var x = parseInt(input[1]);
    var y = parseInt(input[2]);
    newGame.turn(z, x, y);
    if (newGame.playersMoves.length === 0) {
      console.log("not working!");
    } else {
      console.log(newGame.playersMoves.length);
      console.log(newGame.computersMoves.length);
    }
    $(this).off;
    var array = newGame.computersMoves[newGame.computersMoves.length-1].coordinates;
    var selector = array[0].toString() + ", " + array[1].toString() + ", " + array[2].toString();
    document.getElementById(selector).style.backgroundColor="blue";
    var array2 = newGame.playersMoves[newGame.playersMoves.length-1].coordinates;
    var selector2 = array2[0].toString() + ", " + array2[1].toString() + ", " + array2[2].toString();
    document.getElementById(selector2).style.backgroundColor="red";
  });
});
