# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.delete_all

Project.create!(
  title: "Paper Mache Volcano",
  image_url: "website",
  description: "When you add vinegar to bicarbonate of soda a chemical
  reaction occurs – the result is 'carbonic acid'. This is an unstable
  substance – you can tell from all the fizzing! The mixture instantly
  separates into a gas and a liquid, producing carbon dioxide and water.
  Discovering how to make a paper mache volcano erupt is a simple and safe
  way to teach your kids the basics of how a chemical reaction works. If
  you enjoyed learning how to make a volcano out of paper mache why not
  try out some of our other paper mache activities, like the hot air
  balloon, funky bangles, or mini versions of our paper mache dinosaurs
  and dinosaur eggs – they’ll look great alongside your volcano!How did
  you get on making a paper mache volcano? Let us know in a comment
  below!",
  tagline: "A classic craft for kids, this paper mache volcano is an
  excellent science experiment too!",
  end_date: Date.new(2100, 7, 5),
  funding_goal: 50,
  creator_id: 1,
  category_id: 1,
)
Project.create!(
  title: "Flying Potatoes",
  image_url: "website",
  description: "The potato gun beautifully illustrates Boyle’s Law,
  which states that pressure and volume are inversely proportional. In
  other words, as you decrease the volume of the air trapped in between
  the two pieces of potato, the pressure exerted by the air increases.
  This increase in pressure eventually forces the potato at the top end
  to exit the tube with great pizzazz!",
  tagline: "Nothing's more fun than a potato gun.",
  end_date: Date.new(2030, 7, 5),
  funding_goal: 100,
  creator_id: 2,
  category_id: 3,
)
