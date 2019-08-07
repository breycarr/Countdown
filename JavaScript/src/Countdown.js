function Countdown() {
  this.board = []
  this.consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L",
                     "M", "N", "P", "Q", "R", "S", "T", "V", "W",
                     "X", "Y", "Z"
                    ]
  this.vowels = ["A", "E", "I", "O", "U"]
}

Countdown.prototype.showBoard = function() {
  return this.board;
}

// consonant and vowel are repeating code
// probably worth extracting them to the same function
// which defines which board is being used 
Countdown.prototype.consonant = function() {
  if (this.board.length >= 9) {
    throw 'The board can only be 9 letters!'
  }
  var letter = this.consonants[Math.floor(Math.random()*this.consonants.length)];
  this.board.push(letter)
  return letter
}

Countdown.prototype.vowel = function() {
  if (this.board.length >= 9) {
    throw 'The board can only be 9 letters!'
  }
  var letter = this.vowels[Math.floor(Math.random()*this.vowels.length)];
  this.board.push(letter)
  return letter
}
