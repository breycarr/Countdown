def pick_vowel(x)
  vowels = { A: 15, E: 21, I: 13, O: 13, U: 5 }
  v_choice = []
  vowels.map {|letter, number| number.times {v_choice << letter}}
  x.times {print v_choice.shuffle!.pop(1)}
end

pick_vowel(5)
