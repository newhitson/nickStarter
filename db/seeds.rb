# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.delete_all

User.delete_all

Reward.delete_all

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


project1 = Project.create!(
  title: "Temple City",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501106963/NCKSTRTR_VIDEO_GAME_003_jjlbld.jpg",
  description: "A new state of-the-art game engine empowers players to
  seize and resurrect abandoned temples floating in space, attract rabid
   followers and topple the false heralds of chaos! there are two multiplayer modes.
    The cooperative mode is similar to the typical horde mode found in
     other action video games where players team up to defeat wave after
      wave of enemies, but is unavailable at launch, launching instead
      30 days after the game itself first becomes available. In addition
      to the cooperative mode, a player can engage in an 8v8 class-based
      team competitive mode. There are three classes the player can
      choose from on the side of the Loyalist Space Marines or the
      traitorous Chaos Space Marines.The player can gain experience in
      gameplay by getting kills and assists on kills which will allow
      him to gain levels.There are also challenges associated with
      different weapons that will unlock perks for weapons or armour
      pieces to customize a player's Astartes. In competitive
      multiplayer, there are two different game modes. The first is
      annihilation, which is a standard team death match, with the
       winning team being whoever reaches 41 kills first. The
      second is seize ground, in which the two teams battle over
      objectives on the field that give points, and whichever
      team reaches 1000 points first wins. A capture the flag
      game mode is possible through a future update.",
  tagline: "Amass more devoted followers than your rivals in this innovative video game set in deep space!",
  end_date: Date.new(2018, 1, 5),
  funding_goal: 500,
  creator_id: user2.id,
  category_id: 8,
  funded: 500
)

Reward.create(
  project_id: project1.id,
  title: "high five",
  description: "highs five",
  cost: 5
)
Reward.create(
  project_id: project1.id,
  title: "high five2",
  description: " 2 highs five",
  cost: 9
)



project2 = Project.create!(
  title: "The Woman Who Feel to Earth",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501108745/NCKSTRTR_GRAPHIC_NOVEL_003_ei4jbg.jpg",
  description: "A graphic novel with HD printing that combines immersive
   prose and lavish art in a compelling new twist on a very strange
   stranger in an even stranger land. See our lunacy through the confused
    yet compassionate eyes of an intergalactic castaway forced to fight
     people and state just to survive a single day until she is rescued.",
  tagline: "Follow the exploits of our heroine as she tries to make sense of, and peace with, crazy Earthlings!",
  end_date: Date.new(2017, 10, 5),
  funding_goal: 100,
  creator_id: user2.id,
  category_id: 8,
  funded: 75
)

Reward.create(
  project_id: project2.id,
  title: "selfie",
  description: "selfie in the face",
  cost: 5
)

Project.create!(
  title: "Universal Pet Insurace",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501177002/s3620n02esgmiool_zss2jj.jpg",
  description: "While we debate and vote on the rights of Americans to
    gain or maintain health care, there are those we love who have no votes
    and no rights to a happy, healthy life ... without our help! The very
    pets we love, who bring us joy and utter devotion, need our support.
    Give generously to this humane new charity that can make a difference
    in millions of lives.",
  tagline: "Can we afford to let our best friends down?",
  end_date: Date.new(2017, 9, 6),
  funding_goal: 20000,
  creator_id: user3.id,
  category_id: 8,
    funded: 175
)

Project.create!(
  title: "Classic Rideshare",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501111376/NCKSTRTR_CLASSIC_CAR_RENTAL_AGENCY_001_dosnnq.jpg",
  description: "Tired of being dropped off in front of your friends by a
   standard Prius or Civic?  Why not step out in style with classic
   confidence!  Classic cars and uniformed drivers are just a few taps
   away with an iPhone or Android app that assures you of a great first
   and last impression.",
  tagline: "Travel in timeless style!",
  end_date: Date.new(2018, 1, 5),
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
  end_date: Date.new(2017, 9, 3),
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
  end_date: Date.new(2020, 11, 5),
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
  end_date: Date.new(2017, 11, 8),
  funding_goal: 200,
  creator_id: user2.id,
  category_id: 2,
  funded: 75
)
