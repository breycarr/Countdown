


# part 2 - all possible combinations
  puts (2..9).flat_map{|size| board.combination(size).map(&:join)}

#part 3 - cross reference all words to dictionary, keep only valid words
