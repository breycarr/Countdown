describe("Countdown", function() {
  var game

  beforeEach(function() {
    game = new Countdown
  });

  it("should start with an empty board", function() {
    expect(game.showBoard()).toEqual([])
  });
});
