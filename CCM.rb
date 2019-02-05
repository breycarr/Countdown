puts "Welcome to the Cats does Countdown Conundrum Maker"
puts "Your letters are:"

def pick_vowel(x)
  vowels = { A: 15, E: 21, I: 13, O: 13, U: 5 }
  v_choice = []
  vowels.map {|letter, number| number.times {v_choice << letter}}
  v_choice.shuffle!.pop(x)
end

def pick_consonant (y)
  consonants = {B: 2,  C: 3, D: 6, F: 2, G: 3, H: 2, J: 1, K: 1, L: 5, M: 4, N: 8, P: 4, Q: 1, R: 9, S: 9, T: 9, V: 1, W: 1, X: 1, Y: 1, Z: 1}
  c_choice = []
  consonants.map {|letter, number| number.times {c_choice << letter}}
  c_choice.shuffle!.pop(y)
end

num_of_vowels = [3,4,5].sample
num_of_consonants = 9 - num_of_vowels

pick_consonant(num_of_consonants)
print pick_vowel(num_of_vowels)


=begin
def solver(board)
  puts (2..9).flat_map{|size| board.combination(size).map(&:join)}
end

solver(board)
=end

#crossref solver output with dictionary
