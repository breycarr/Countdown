function Countdown() {
  this.board = []
  this.consonants = ["B", "C", "D", "F", "G", "H", "J", "K", "L",
                     "M", "N", "P", "Q", "R", "S", "T", "V", "W",
                     "X", "Y", "Z"
                    ]
}

Countdown.prototype.showBoard = function() {
  return this.board;
}

Countdown.prototype.consonant = function() {
  return this.consonants[Math.floor(Math.random()*this.consonants.length)];
}
