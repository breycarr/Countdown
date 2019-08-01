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

Countdown.prototype.consonant = function() {
  var letter = this.consonants[Math.floor(Math.random()*this.consonants.length)];
  this.board.push(letter)
  return letter
}

Countdown.prototype.vowel = function() {
  var letter = this.vowels[Math.floor(Math.random()*this.vowels.length)];
  this.board.push(letter)
  return letter
}
