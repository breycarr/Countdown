puts "Welcome to the Cats does Countdown Conundrum Maker"
puts "Your letters are:"

=begin
valid_combo = [[2,7],[3,6],[4,5]].sample
pass one of these three combinations into p_v/p_c below
=end

def pick_vowel(x)
  vowels = { A: 15, E: 21, I: 13, O: 13, U: 5 }
  choice = []
  vowels.map do |letter, number|
    number.times {choice << letter}
  end
  x.times {print "#{choice.sample} "}
end

def pick_consonant (y)
  consonants = {B: 2,  C: 3, D: 6, F: 2, G: 3, H: 2, J: 1, K: 1, L: 5, M: 4, N: 8, P: 4, Q: 1, R: 9, S: 9, T: 9, V: 1, W: 1, X: 1, Y: 1, Z: 1}
  selection = []
  consonants.map do |letter, number|
    number.times {selection << letter}
  end
  y.times {print "#{selection.sample} "}
end

pick_vowel(2)
pick_consonant(7)

#take selected letters and add them into board
#pass board to solver

=begin def solver(board)
  puts (2..9).flat_map{|size| board.combination(size).map(&:join)}
end

solver(board)
=end

#crossref solver output with dictionary
