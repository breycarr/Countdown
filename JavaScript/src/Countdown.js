function Countdown() {
  this.board = [];
  this.numberOfConsonants = 0
  this.numberOfVowels = 0
  this.consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L",
                     "M", "N", "P", "Q", "R", "S", "T", "V", "W",
                     "X", "Y", "Z"
                   ];
  this.vowels = ["A", "E", "I", "O", "U"];
}

Countdown.prototype.showBoard = function() {
  return this.board;
}

Countdown.prototype.getLetter = function(type) {
  var selection = this.consonants;
  if (type === "vowel") {
    selection = this.vowels;
  }

  var letter = selection[Math.floor(Math.random()*selection.length)];
  this.board.push(letter);
  return letter
}

Countdown.prototype.boardLengthCheck = function() {
  if (this.board.length >= 9) {
    throw 'The board can only be 9 letters!';
  }
}

Countdown.prototype.consonant = function() {
  this.boardLengthCheck();

  if (this.numberOfConsonants >= 6) {
    throw 'The board can only have 6 consonants';
  }
  
  var letter = this.getLetter("consonant");
  this.numberOfConsonants += 1
  return letter;
}

Countdown.prototype.vowel = function() {
  this.boardLengthCheck();

  if (this.numberOfVowels >= 5) {
    throw 'The board can only have 5 vowels';
  }

  var letter = this.getLetter("vowel");
  this.numberOfVowels += 1
  return letter;
}
