describe("A game", function(){

  it("should have a board", function(){
    game = new Game()
    expect(game.board.length).toEqual(9)
  });


});
