# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Creating boilerplate users...'
eli7vh = User.create! name: 'Elijah Lucian', username: 'eli7vh', email: 'elijahlucian@gmail.com', password: 'dank-inc-42'
eli7vh = User.create! name: 'Toffee the doggo', username: 'toffee', email: 't.bone@bork.org', password: 'dankbone'

puts 'Seeds complete!'