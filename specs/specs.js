describe('Player', function() {
  it("returns a player's mark", function() {
    var testPlayer = new Player("X");
    expect(testPlayer.mark).to.equal("X");
  });
});

describe('Space', function(){
  it('has coordinates', function(){
    var testSpace = new Space(1, 2, 3);
    expect(testSpace.coordinates).to.eql([1, 2, 3]);
  });
  it('returns x coordinate', function(){
    var testSpace = new Space(1, 2, 3);
    expect(testSpace['x-coordinate']).to.equal(2);
  });
  it('returns y coordinate', function(){
    var testSpace = new Space(1, 2, 3);
    expect(testSpace['y-coordinate']).to.equal(3);
  });
  it('returns z-coordinate', function(){
    var testSpace = new Space(1, 2, 3);
    expect(testSpace['z-coordinate']).to.equal(1);
  });
  it('returns true if available', function(){
    var testSpace = new Space(1, 2, 3);
    expect(testSpace.available).to.equal(true);
  });
  it('returns the players mark when checking a space', function() {
    var testSpace = new Space(1, 2, 3);
    var testPlayer = new Player("X");
    testSpace.mark(testPlayer);
    expect(testSpace.markedBy).to.equal("X");
  });
  it('doesnt let a player take and already taken spot', function() {
    var testSpace = new Space(1, 2, 3);
    var testPlayer = new Player("X");
    var testPlayer2 = new Player("0");
    testSpace.mark(testPlayer);
    testSpace.mark(testPlayer2);
    expect(testSpace.markedBy).to.equal("X");
  });
});

describe('Board', function(){
  it('creates a 3 level tic tac toe game space', function(){
    var testBoard = new Board();
    expect(testBoard.spaces.length).to.equal(27);
  });
  it('creates a 3 level tic tac toe game space and all spaces are available', function(){
    var testBoard = new Board();
    expect(testBoard.availableSpaces().length).to.equal(testBoard.spaces.length);
  });
  it('lets a player mark a space on the board', function() {
    var testBoard = new Board();
    var testPlayer = new Player("X");
    var testSpace = testBoard.findSpace(1, 2, 3);
    testSpace.mark(testPlayer);
    expect(testSpace.markedBy).to.equal("X");
  });
  it('checks if a player has won the game', function(){
    var testBoard = new Board();
    var testPlayer = new Player("X");
    expect(testBoard.checkForWinner(testPlayer)).to.equal(false);
  });
  it('checks if a player has won the game', function(){
    var testBoard = new Board();
    var testPlayer = new Player("X");
    testBoard.findSpace(1, 1, 1).mark(testPlayer);
    testBoard.findSpace(2, 1, 1).mark(testPlayer);
    testBoard.findSpace(3, 1, 1).mark(testPlayer);
    expect(testBoard.checkForWinner(testPlayer)).to.equal(true);
  });
  it('checks if a player has won the game', function(){
    var testBoard = new Board();
    var testPlayer = new Player("X");
    testBoard.findSpace(1, 1, 1).mark(testPlayer);
    testBoard.findSpace(2, 2, 2).mark(testPlayer);
    testBoard.findSpace(3, 3, 3).mark(testPlayer);
    expect(testBoard.checkForWinner(testPlayer)).to.equal(true);
  });
  it('checks if a player has won the game', function(){
    var testBoard = new Board();
    var testPlayer = new Player("X");
    testBoard.findSpace(1, 1, 2).mark(testPlayer);
    testBoard.findSpace(2, 2, 2).mark(testPlayer);
    testBoard.findSpace(3, 3, 2).mark(testPlayer);
    expect(testBoard.checkForWinner(testPlayer)).to.equal(true);
  });
});

describe('Game', function(){
  it('makes a new board and new players', function(){
    var newGame = new Game();
    expect(newGame.board.spaces.length).to.equal(27);
  });
  it('has a computer mark a space every turn', function(){
    var newGame = new Game();
    newGame.turn(2, 2, 2);
    expect(newGame.computersMoves.length).to.equal(1);
  });
});
