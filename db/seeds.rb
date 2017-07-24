# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.delete_all

User.delete_all

user1 = User.create!(
  username: "BobbyTables",
  password: "password",
  email: "xkcd@xkcd.com"
)

user2 = User.create!(
  username: "Jon Snow",
  password: "password",
  email: "thewall@nightwatch.com"
)

user3 = User.create!(
  username: "gandalf",
  password: "password",
  email: "thering@lotr.com"
)


Project.create!(
  title: "Paper Mache Volcano",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
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
  creator_id: user1.id,
  category_id: 8,
  funded: 25
)
Project.create!(
  title: "Flying Potatoes",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
  description: "The potato gun beautifully illustrates Boyle’s Law,
  which states that pressure and volume are inversely proportional. In
  other words, as you decrease the volume of the air trapped in between
  the two pieces of potato, the pressure exerted by the air increases.
  This increase in pressure eventually forces the potato at the top end
  to exit the tube with great pizzazz!",
  tagline: "Nothing's more fun than a potato gun.",
  end_date: Date.new(2030, 7, 5),
  funding_goal: 100,
  creator_id: user2.id,
  category_id: 8,
  funded: 75
)

Project.create!(
  title: "Does the Weather Really Affect Mood?",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
  description: "Does weather have any effect on mood?
  Are people more likely to be dissatisfied or melancholy on a rainy,
  overcast day? Are people more likely to be happy on a sunny day?
  Is one gender or age group more likely to be influenced by the weather?",
  tagline: "It has long been believed that weather has influence over
  people's mood and behavior.",
  end_date: Date.new(2020, 7, 5),
  funding_goal: 200,
  creator_id: user3.id,
  category_id: 8,
    funded: 175
)

Project.create!(
  title: "Does the Weather Really Affect Mood?",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
  description: "Does weather have any effect on mood?
  Are people more likely to be dissatisfied or melancholy on a rainy,
  overcast day? Are people more likely to be happy on a sunny day?
  Is one gender or age group more likely to be influenced by the weather?",
  tagline: "It has long been believed that weather has influence over
  people's mood and behavior.",
  end_date: Date.new(2020, 7, 5),
  funding_goal: 200,
  creator_id: user1.id,
  category_id: 8,
  funded: 10
)

Project.create!(
  title: "Does the Weather Really Affect Mood?",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
  description: "Does weather have any effect on mood?
  Are people more likely to be dissatisfied or melancholy on a rainy,
  overcast day? Are people more likely to be happy on a sunny day?
  Is one gender or age group more likely to be influenced by the weather?",
  tagline: "It has long been believed that weather has influence over
  people's mood and behavior.",
  end_date: Date.new(2020, 7, 5),
  funding_goal: 200,
  creator_id: user1.id,
  category_id: 8,
  funded: 160
)


Project.create!(
  title: "Does the Weather Really Affect Mood?",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
  description: "Does weather have any effect on mood?
  Are people more likely to be dissatisfied or melancholy on a rainy,
  overcast day? Are people more likely to be happy on a sunny day?
  Is one gender or age group more likely to be influenced by the weather?",
  tagline: "It has long been believed that weather has influence over
  people's mood and behavior.",
  end_date: Date.new(2020, 7, 5),
  funding_goal: 200,
  creator_id: user1.id,
  category_id: 8,
  funded: 180
)


Project.create!(
  title: "Build a Knife",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1500917416/yllkkwu6uomxasgrut0f.jpg",
  description: "Now you need to decide how to attach the handle to the
  blade. There are three common methods of doing this: a full tang, a
  partial tang, or a through-tang. A full tang has the same profile as
  the handle of the knife, and the meat of the handle is formed by two
  slabs of wood (scales) to either side of the tang; most good knives
  are made this way. The knife I'm making here is a full tang knife. A
  partial tang is the most inconspicuous of the three and, in my view,
  the hardese",
  tagline: "knife making is a slow, delicate, painstaking,
  multi-faceted, sometimes frustrating process",
  end_date: Date.new(2020, 7, 5),
  funding_goal: 200,
  creator_id: user2.id,
  category_id: 2,
  funded: 75
)
