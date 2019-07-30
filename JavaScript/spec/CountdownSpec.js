describe("Countdown", function() {
  var game;

  beforeEach(function() {
    game = new Countdown;
  });

  it("should start with an empty board", function() {
    expect(game.showBoard()).toEqual([]);
  });

  it("should return a consonant when called", function() {
    expect(game.consonant()).toMatch(/[B-DF-HJ-NP-TV-Z]/)
  });

  it("should return a vowel when called", function() {
    expect(game.vowel()).toMatch(/[AEIOU]/)
  });
});
