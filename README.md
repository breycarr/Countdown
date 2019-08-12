# Countdown
> Letter game based on the TV-series Countdown

This project was originally based on my wife's enjoyment of "8 Out of 10 Cats does Countdown" and used as a way to practice ruby, the results of which can be found in the Ruby folder.

Since then, I've learned far more about test driven development, and code quality.

So, in order to practice TDD and JavaScript, I decided to go back to the start of the project and begin again in JavaScript.

## Installation

`git clone` this repository

## How to play

The app uses the rules of the long-running British TV series [Countdown](https://www.channel4.com/programmes/countdown) (also known as 'Letters and Numbers', 'Numbers and Letters' and 'A Word or 2' in different parts of the world)

The player chooses between two stacks of letter tiles, one containing vowels and the other consonants, which reveals the top tile from that stack and places it in the board. This is done nine times and the final grouping must contain at least three vowels and four consonants. The player must then form the longest single word they can, using the nine revealed letters; no letter may be used more often than it appears in the selection.

The player scores one point per letter for a valid word, or 18 points if they have used all nine.

Any word which appears in the Oxford Dictionary of English is valid, according to the Oxford Dictionaries API
