users  = { A: 15, E: 21, I: 13, O: 13, U: 5 }
raffle = []
users.map do |name, tickets|
  tickets.times { raffle << name }
end
p raffle
# [:john, :john, :john, :john, :david]
p raffle.sample
# :john
