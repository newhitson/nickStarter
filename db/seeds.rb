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
  funding_goal: 300000,
  creator_id: user2.id,
  category_id: 5,
  funded: 125000
)

Reward.create(
  project_id: project1.id,
  title: "Lieutenant",
  description: "You get your choice of one of the faction fleet packs.
   These are the best buys, giving you the most for your money!",
  cost: 55
)
Reward.create(
  project_id: project1.id,
  title: "Commodore",
  description: "You get your choice of two faction fleet packs. At this
  level you are also eligible to receive any of the stretch goal bonuses",
  cost: 100
)
Reward.create(
  project_id: project1.id,
  title: "Fleet Admiral",
  description: "You get one of all three faction fleet packs, plus an
  additonal $60 dollars worth of ships at regular prices of your choice",
  cost: 150
)



project2 = Project.create!(
  title: "The Woman Who Fell to Earth",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501108745/NCKSTRTR_GRAPHIC_NOVEL_003_ei4jbg.jpg",
  description: "A graphic novel with HD printing that combines immersive
   prose and lavish art in a compelling new twist on a very strange
   stranger in an even stranger land. See our lunacy through the confused
    yet compassionate eyes of an intergalactic castaway forced to fight
     people and state just to survive a single day until she is rescued.",
  tagline: "Follow the exploits of our heroine as she tries to make sense
   of, and peace with, crazy Earthlings!",
  end_date: Date.new(2017, 10, 5),
  funding_goal: 1500,
  creator_id: user2.id,
  category_id: 2,
  funded: 75
)

Reward.create(
  project_id: project2.id,
  title: "See The World, And Glimpse What Comes Next ",
  description: "For this amount you'll get not only the PDF for issue #1,
   but also a piece of concept art",
  cost: 5
)

Reward.create(
  project_id: project2.id,
  title: "Hold The World In Your Hands",
  description: "You'll get a physical copy of issue #1, so you can feel
   the story come to life",
  cost: 10
)

Reward.create(
  project_id: project2.id,
  title: "Have Your Name Attached To Our World",
  description: "If you pledge here, you'll be put into a special Thank
  You section of issue #1, so all the world can see how you helped make
   this comic.",
  cost: 15
)

project3 = Project.create!(
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
  funding_goal: 2000000,
  creator_id: user3.id,
  category_id: 7,
  funded: 150000
)


Reward.create(
  project_id: project3.id,
  title: "Caregiver",
  description: "provides you with the finest in comprehensive veterinary
   medicine for your pet",
  cost: 6000
)

Reward.create(
  project_id: project3.id,
  title: "Care counselor",
  description: "provides you with the finest in comprehensive veterinary
   medicine for pets in your area",
  cost: 12000
)

Reward.create(
  project_id: project3.id,
  title: "Care Coordinator",
  description: "provides you with the finest in comprehensive veterinary
   medicine for your city",
  cost: 25000
)

project4 = Project.create!(
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
  category_id: 7,
  funded: 10
)

Reward.create(
  project_id: project4.id,
  title: "Classic Car",
  description: "Give friends and family the gift of tapping a button and
   getting 10 rides - any time of day, any day of year",
  cost: 150
)

Reward.create(
  project_id: project4.id,
  title: "Muscle Car",
  description: "Give friends and family the gift of tapping a button and
   getting 20 rides - any time of day, any day of year",
  cost: 250
)

Reward.create(
  project_id: project4.id,
  title: "Street Rod",
  description: "Give friends and family the gift of tapping a button and
   getting 30 rides - any time of day, any day of year",
  cost: 250
)

project5 = Project.create!(
  title: "BRAVE LITTLE ROASTR",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501184576/NCKSTRTR_BRAVE_LITTLE_ROASTER_003_uqslzf.jpg",
  description: "Hip flask size and lightweight, the Brave Little Roaster
   will roast, grind and brew a delicious cup of coffee wherever you go!
      A small reservoir of water will never spill or leak. The ready-to-be
       roasted beans are safely stored in an airtight plastic canister
       and the brewed coffee can be set to any temperature. Why wait for
        the freshest, best-tasting coffee?",
  tagline: "Portable coffee roaster, grinder and brewer is as convenient as it is delicious!",
  end_date: Date.new(2017, 9, 3),
  funding_goal: 9000,
  creator_id: user1.id,
  category_id: 4,
  funded: 2400
)

Reward.create(
  project_id: project5.id,
  title: "House Blend",
  description: "One BRAVE LITTLE ROASTR",
  cost: 150
)

Reward.create(
  project_id: project5.id,
  title: "Pour Over",
  description: " One BRAVE LITTLE ROASTR with a custom made carring case",
  cost: 200
)

Reward.create(
  project_id: project5.id,
  title: "Artisan Blend",
  description: "Two BRAVE LITTLE ROASTR's and 2 custom made carring case",
  cost: 350
)


project6 = Project.create!(
  title: "Moblie Tree Home",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501190970/NCKSTRTR_MOBILE_TREE_HOME_001_zbvznc.jpg",
  description: "Completely self-sufficient and off-the-grid living can
  by yours up where the air is fine! Mobile Tree Homes are custom made
  to order, brought to your site and raised up to the canopy. Expert
  home builders lavish their craft on your very own nest in the branches.
   Professional drivers deliver to almost any safely accessible landscape.
    Financing available on approved credit!",
  tagline: "Tarzan never had it so good!",
  end_date: Date.new(2020, 11, 5),
  funding_goal: 2000000,
  creator_id: user1.id,
  category_id: 3,
  funded: 125000
)

Reward.create(
  project_id: project6.id,
  title: "Moblie Tree Home",
  description: "Moblie Tree Home is not only doable for a couple, but also with some extra furry friends included",
  cost: 125000
)

Reward.create(
  project_id: project6.id,
  title: "Moblie Tree Home with double closets",
  description: "With two people living together, you can never go wrong with more storage",
  cost: 155000
)

Reward.create(
  project_id: project6.id,
  title: "Moblie Tree Home with a separate bedroom",
  description: "allows lovers a bit of privacy with a separate bedroom
  towards the back, in addition to a loft bed for any guests.",
  cost: 175000
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
