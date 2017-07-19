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
  end_date: Date.new(2100,7,5)
#  funding_goal :integer          not null
#  creator_id   :integer          not null
#  category_id  :integer          not null

)
