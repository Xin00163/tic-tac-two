describe("displayBoard", function(){
  var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  it("should return the board in the right format", function(){
    expect(displayBoard(board)).toEqual("0|1|2\n" + "3|4|5\n" + "6|7|8\n")
  });
});

describe("turn", function(){
  var turn_number1 = 8;
  var turn_number2 = 7;

  it("should return x for even and o for odd", function(){
    expect(turn(turn_number1)).toEqual("X")
    expect(turn(turn_number2)).toEqual("O")
  })
})

describe("checkWins", function(){
  var winningCombo = [
                      [0, 1, 2], [3, 4, 5], [6, 7, 8],
                      [0, 3, 6], [1, 4, 7], [2, 5, 8],
                      [0, 4, 8], [2, 4, 6]
                     ];
  var board = ["X", "X", "X", "O", "X", "O", "O", "X", "O"]
  it("should return X WINS!!!!", function(){
    expect(checkWins()).toEqual("X WINS!!!!")
  })
})

describe("play_turn", function(){
  var board = ["X", "X", "X", "O", "X", " ", " ", " ", " "]

  it("should not allow players to use the same square twice"){
    expect().toThrow(new Error("NAUGHTY!!!"));
 })
