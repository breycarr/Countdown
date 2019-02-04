# part 1 - create a board of 9 letters
  board = (0...9).map { (65 + rand(26)).chr }.join.split(//)
  puts board.join(' ')
# additional requirements - min/max number of vowels (3 - 5)
# alternative consideration - pre-existing array of letters with distribution
# reference source: http://www.thecountdownpage.com/letters.htm


# part 2 - all possible combinations
  puts (2..9).flat_map{|size| board.combination(size).map(&:join)}

#part 3 - cross reference all words to dictionary, keep only valid words
