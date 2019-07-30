describe("Countdown", function() {
  var game;

  beforeEach(function() {
    game = new Countdown;
  });

  it("should start with an empty board", function() {
    expect(game.showBoard()).toEqual([]);
  });
  describe("#consonant", function() {
    it("should return a consonant when called", function() {
      expect(game.consonant()).toMatch(/[B-DF-HJ-NP-TV-Z]/)
    });
    it("should add a consonant to the board", function() {
      game.consonant()
      expect(game.showBoard().length).toEqual(1)
    })
  });

  describe("#vowel", function() {
    it("should return a vowel when called", function() {
      expect(game.vowel()).toMatch(/[AEIOU]/)
    });
  });
});
