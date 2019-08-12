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

Countdown.prototype.getLetter = function(type) {
  var selection = this.consonants
  if (type === "vowel") { selection = this.vowels }

  return selection[Math.floor(Math.random()*selection.length)]
}

Countdown.prototype.consonant = function() {
  if (this.board.length >= 9) { throw 'The board can only be 9 letters!' }

  var letter = this.getLetter("consonant")
  this.board.push(letter)
  return letter
}

Countdown.prototype.vowel = function() {
  if (this.board.length >= 9) { throw 'The board can only be 9 letters!' }

  var letter = this.getLetter("vowel")
  this.board.push(letter)
  return letter
}
