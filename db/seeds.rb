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
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501187156/NCKSTRTR_GRAPHIC_NOVEL_001_qcj17b.jpg",
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


project7 = Project.create!(
  title: "Mad Potter Studio",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501266713/alex-jones-6798_qmrbij.jpg",
  description: "There are several materials that are referred to as clay.
   The properties which make them different include: Plasticity, the
   malleability of the body; the extent to which they will absorb water
   after firing; and shrinkage, the extent of reduction in size of a body
    as water is removed. Different clay bodies also differ in the way in
     which they respond when fired in the kiln. A clay body can be
     decorated before or after firing. Prior to some shaping processes,
     clay must be prepared. Each of these different clays are composed
     of different types and amounts of minerals that determine the
     characteristics of resulting pottery. There can be regional
     variations in the properties of raw materials used for the
     production of pottery, and this can lead to wares that are unique
     in character to a locality. It is common for clays and other
     materials to be mixed to produce clay bodies suited to specific
     purposes. A common component of clay bodies is the mineral
     kaolinite. Other mineral compounds in the clay may act as fluxes
     which lower the vitrification temperature of bodies. Following is a
     list of different types of clay used for pottery",
  tagline: "Trying to get my hands around my passion! Clays for days!",
  end_date: Date.new(2018, 4, 8),
  funding_goal: 2000,
  creator_id: user2.id,
  category_id: 1,
  funded: 175
)

Reward.create(
  project_id: project7.id,
  title: "Completed pottery piece",
  description: "I will send you 1 completed piece of pottery",
  cost: 75
)

Reward.create(
  project_id: project7.id,
  title: "2 Completed pottery pieces",
  description: "I will send you 2 completed pieces of pottery",
  cost: 125
)

project8 = Project.create!(
  title: "Graffiti Book: South African Street Art: Volume Two",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501267088/lucas-gallone-228252_tzptbt.jpg",
  description: "Street art is a form of artwork that is displayed in a
  community on its surrounding buildings, streets, and other publicly
  viewed surfaces. Many instances come in the form of guerrilla art,
  which is composed to make a public statement about the society that
  the artist lives within. The work has moved from the beginnings of
  graffiti and vandalism to new modes where artists work to bring
  messages, or just simple beauty, to an audience",
  tagline: "Speak softly, but carry a big can of paint",
  end_date: Date.new(2018, 9, 8),
  funding_goal: 2500,
  creator_id: user2.id,
  category_id: 1,
  funded: 350
)

Reward.create(
  project_id: project8.id,
  title: "Completed pottery piece",
  description: "A digital book version",
  cost: 10
)

Reward.create(
  project_id: project8.id,
  title: "2 Completed pottery pieces",
  description: "ONE signed paperback copy",
  cost: 20
)

project9 = Project.create!(
  title: "Bring oragami to the classroom",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501267447/dev-benjamin-219413_rvznqh.jpg",
  description: "Origami (折り紙, from ori meaning folding, and kami
   meaning paper (kami changes to gami due to rendaku)) is the art of
    paper folding, which is often associated with Japanese culture. In
    modern usage, the word origami is used as an inclusive term for
    all folding practices, regardless of their culture of origin. The
    goal is to transform a flat sheet square of paper into a finished
    sculpture through folding and sculpting techniques. Modern origami
    practitioners generally discourage the use of cuts, glue, or markings
     on the paper. Origami folders often use the Japanese word kirigami
     to refer to designs which use cuts, although cutting is more
     characteristic of Chinese papercrafts.",
  tagline: "You must always fold with care and precision, because
  otherwise the final result may be disastrous",
  end_date: Date.new(2018, 9, 8),
  funding_goal: 7500,
  creator_id: user2.id,
  category_id: 1,
  funded: 950
)

Reward.create(
  project_id: project9.id,
  title: "Teacher",
  description: "One childs paper crane",
  cost: 10
)

Reward.create(
  project_id: project9.id,
  title: "Principle",
  description: "One thousand childrens paper cranes",
  cost: 2000
)

project10 = Project.create!(
  title: "Live on Canvas",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501267936/rawpixel-com-196509_knib2l.jpg",
  description: "The process consists of four major steps, performed in a
   photographic darkroom or within an automated photo printing machine.
   These steps are:
Exposure of the image onto the sensitized paper using a contact printer
or enlarger;
Processing of the latent image using the following chemical process:
Development of the exposed image reduces the silver halide in the latent
 image to metallic silver;
Stopping development by neutralising, diluting or removing the developing
chemicals;
Fixing the image by dissolving undeveloped silver halide from the
light-sensitive emulsion:
Washing thoroughly to remove processing chemicals protects the finished
print from fading and deterioration.
Optionally, after fixing, the print is treated with a hypo clearing agent
 to ensure complete removal of the fixer, which would otherwise compromise
  the long term stability of the image. Prints can be chemically toned or
   hand coloured after processing",
  tagline: "Taking photo and bringing them home",
  end_date: Date.new(2018, 9, 8),
  funding_goal: 600,
  creator_id: user2.id,
  category_id: 1,
  funded: 100
)

Reward.create(
  project_id: project10.id,
  title: "One print",
  description: "You'll get a physical copy your print 1",
  cost: 10
)

Reward.create(
  project_id: project10.id,
  title: "5 prints",
  description: "You'll get 5 physical copies your prints ",
  cost: 40
)

project11 = Project.create!(
  title: "Fighting adamitism with music ",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501268256/soroush-karimi-225177_ivwvlf.jpg",
  description: "The violin is a wooden string instrument in the violin
  family. It is the smallest and highest-pitched instrument in the family
   in regular use. Smaller violin-type instruments are known, including
   the violino piccolo and the kit violin, but these are virtually unused
    in the 2010s. The violin typically has four strings tuned in perfect
    fifths, and is most commonly played by drawing a bow across its strings,
     though it can also be played by plucking the strings with the fingers
     (pizzicato). Violins are important instruments in a wide variety of
     musical genres. They are most prominent in the Western classical
     tradition and in many varieties of folk music. They are also
     frequently used in genres of folk including country music and
     bluegrass music and in jazz. Electric violins are used in some
     forms of rock music; further, the violin has come to be played in
     many non-Western music cultures, including Indian music and Iranian
      music. The violin is sometimes informally called a fiddle,
      particularly in Irish traditional music and bluegrass, but this
      nickname is also used regardless of the type of music played on it.",
  tagline: "Taking photo and bringing them home",
  end_date: Date.new(2018, 9, 8),
  funding_goal: 300,
  creator_id: user2.id,
  category_id: 6,
  funded: 145
)

Reward.create(
  project_id: project11.id,
  title: "One digigtal CD",
  description: "You'll get a digital copy our first CD",
  cost: 10
)

Reward.create(
  project_id: project11.id,
  title: "One physical CD",
  description: "You'll get a physical copy of our first CD ",
  cost: 15
)

project12 = Project.create!(
  title: "DropTone microphone",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501268847/kelly-sikkema-209680_mctebu.jpg",
  description: "TA microphone, colloquially nicknamed mic or mike, is a
  transducer that converts sound into an electrical signal.
Microphones are used in many applications such as telephones, hearing
aids, public address systems for concert halls and public events, motion
 picture production, live and recorded audio engineering, sound recording,
  two-way radios, megaphones, radio and television broadcasting, and in
  computers for recording voice, speech recognition, VoIP, and for
  non-acoustic purposes such as ultrasonic sensors or knock sensors.",
  tagline: "Finally a microphone that optimizes drop tone frequencies ",
  end_date: Date.new(2018, 9, 8),
  funding_goal: 30000,
  creator_id: user2.id,
  category_id: 6,
  funded: 2250
)

Reward.create(
  project_id: project12.id,
  title: "The early bird",
  description: "DropTone Microphone - $150 off the MSRP! Free Shipping
  in US Only.",
  cost: 550
)
Reward.create(
  project_id: project12.id,
  title: "DropTone Microphone",
  description: " Free Shipping in US Only.",
  cost: 700
)

project13 = Project.create!(
  title: "Optimum Fantasy Chess",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501272595/lou-levit-1940_1_vhhe8c.jpg",
  description: "Each player begins with 16 pieces: one king, one queen,
  two rooks, two knights, two bishops, and eight pawns. Each of the six
  piece types moves differently, with the most powerful being the queen
  and the least powerful the pawn. The objective is to checkmate the
  opponent's king by placing it under an inescapable threat of capture.
  To this end, a player's pieces are used to attack and capture the
  opponent's pieces, while supporting each other. In addition to checkmate,
   the game can be won by voluntary resignation of the opponent, which
   typically occurs when too much material is lost or checkmate appears
   unavoidable. A game can also in several ways end in a draw.",
  tagline: "The first expansion to chess, includes abiltiy, names and traits",
  end_date: Date.new(2018, 3, 2),
  funding_goal: 6000,
  creator_id: user2.id,
  category_id: 5,
  funded: 1200
)

Reward.create(
  project_id: project13.id,
  title: "Knight",
  description: "Optimum Fantasy Chess pieces and rule book",
  cost: 100
)
Reward.create(
  project_id: project13.id,
  title: "Castle",
  description: "Optimum Fantasy Chess pieces and rule book with custom board",
  cost: 200
)
Reward.create(
  project_id: project13.id,
  title: "Queen",
  description: "Optimum Fantasy Chess Hand Crafted pieces and rule book with custom board",
  cost:350
)

project14 = Project.create!(
  title: "Scrapple optical spellchecker",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501273077/moritz-schmidt-17467_xkfqpg.jpg",
  description: "In the notation system common in tournament play,
  columns are labeled with the letters A-O and rows with the numbers 1-15.
   (On Scrabble boards manufactured by Mattel as well as on the Internet
    Scrabble Club, rows are lettered while columns are numbered instead.)
     A play is usually identified in the format xy WORD score or WORD xy
      score, where x denotes the column or row on which the play's main
      word extends, y denotes the second coordinate of the main word's
      first letter, and WORD is the main word. Although unnecessary,
      additional words formed by the play are occasionally listed after
      the main word and a slash. In the case where the play of a single
        tile forms words in each direction, one of the words is arbitrarily
        chosen to serve as the main word for purposes of notation.",
  tagline: "Never argue about what is and isn't a word",
  end_date: Date.new(2018, 3, 2),
  funding_goal: 6000,
  creator_id: user2.id,
  category_id: 5,
  funded: 1200
)

Reward.create(
  project_id: project14.id,
  title: "A1",
  description: "Scrabble optical camera",
  cost: 100
)
Reward.create(
  project_id: project14.id,
  title: "D2",
  description: " Two scrabble optical camera",
  cost: 200
)
Reward.create(
  project_id: project14.id,
  title: "B3",
  description: "Three Scrabble optical camera",
  cost: 200
)

project15 = Project.create!(
  title: "Rock Hard Controller Skin",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1501273741/sherry-zhu-196388_ealcyr.jpg",
  description: "A gamepad, also known as a joypad, is held in both hands
   with thumbs and fingers used to provide input. Gamepads can have a
   number of action buttons combined with one or more omnidirectional
   control sticks or buttons. Action buttons are generally handled with
   the digits on the right hand, and the directional input handled with
   the left. Gamepads are the primary means of input on most modern video
    game consoles. Due to the ease of use and user-friendly nature of
    gamepads, they have spread from their origin on traditional consoles
     to computers, where a variety of games and emulators support their
      input as a replacement for keyboard and mouse input",
  tagline: "Whoever controls the media, controls the mind",
  end_date: Date.new(2018, 4, 18),
  funding_goal: 600,
  creator_id: user2.id,
  category_id: 5,
  funded: 200
)

Reward.create(
  project_id: project15.id,
  title: "Game skin",
  description: "One skin to attach to a controller",
  cost: 20
)
Reward.create(
  project_id: project15.id,
  title: "Two Game skin",
  description: "Two skin to attach to a controller",
  cost: 30
)

project16 = Project.create!(
  title: "Fruit Pantry",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1505261871/igor-ovsyannykov-223090_vsevhv.jpg",
  description: "In botany, a fruit is the seed-bearing structure in
  flowering plants (also known as angiosperms) formed from the ovary
  after flowering.

  Fruits are the means by which angiosperms disseminate seeds. Edible
  fruits, in particular, have propagated with the movements of humans
  and animals in a symbiotic relationship as a means for seed dispersal
  and nutrition; in fact, humans and many animals have become dependent
  on fruits as a source of food. Accordingly, fruits account for a
  substantial fraction of the world's agricultural output, and some
  (such as the apple and the pomegranate) have acquired extensive
  cultural and symbolic meanings.

In common language usage, fruit normally means the fleshy seed-associated
 structures of a plant that are sweet or sour, and edible in the raw
 state, such as apples, bananas, grapes, lemons, oranges, and strawberries
 .On the other hand, in botanical usage, fruit includes many structures
 that are not commonly called fruits, such as bean pods, corn kernels,
 tomatoes, and wheat grains The section of a fungus that produces
  spores is also called a fruiting body.",
  tagline: "When a fruit cabinet just isn't enough",
  end_date: Date.new(2018, 6, 16),
  funding_goal: 50000,
  creator_id: user1.id,
  category_id: 4,
  funded: 2000
)

Reward.create(
  project_id: project16.id,
  title: "Stray grape",
  description: "A Paultry Pantry",
  cost: 45
)
Reward.create(
  project_id: project16.id,
  title: "Banana for scale",
  description: "A Plentiful Pantry",
  cost: 60
)

project17 = Project.create!(
  title: "Sansa's Lemon Cakes",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1505263477/annie-spratt-133872_px8x7m.jpg",
  description: "Olenna and Margaery Tyrell share some lemon cakes with
  Sansa Stark when they meet her in the gardens of the Red Keep to learn
   more about King Joffrey Baratheon, now Margaery's future husband.
   Sansa reveals that Joffrey is a monster.
   Shae offers Sansa some lemon cakes to try to get her to eat something
   , noting that they are her favorite, but Sansa is so griefstricken
  after the hearing about the horrific deaths of her brother Robb and
  her mother Catelyn at the Red Wedding that she doesn't have the will
  to eat anything.

   In the Eyrie Sansa eats lemon cakes with her aunt and they discuss
   how Catelyn was banned from eating sweet foods as a child as she had
    begun to grow fat and had to be beautiful to get a good suitor.
    Sansa then queries how they make the cakes as it would not be
    possible to grow lemon cakes in the Vale.",

  tagline: "Shall we have some lemon cakes?",
  end_date: Date.new(2019, 5, 10),
  funding_goal: 500,
  creator_id: user2.id,
  category_id: 4,
  funded: 60
)

Reward.create(
  project_id: project17.id,
  title: "Olenna Tyrell",
  description: "plate of lemon cakes eaten with a queen",
  cost: 25
)
Reward.create(
  project_id: project17.id,
  title: "Margaery",
  description: "A delivery of Lemon cakes",
  cost: 60
)

project18 = Project.create!(
  title: "Connecting the world through coffee",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1505264308/matt-hoffman-158288_aalpfs.jpg",
  description: "Coffee is a brewed drink prepared from roasted coffee
  beans, which are the seeds of berries from the Coffea plant. The genus
  Coffea is native to tropical Africa (specifically having its origin
  in Ethiopia and Sudan) and Madagascar, the Comoros, Mauritius, and
  Réunion in the Indian Ocean. The plant was exported from Africa to
  countries around the world and coffee plants are now cultivated in
  over 70 countries, primarily in the equatorial regions of the Americas,
  Southeast Asia, India, and Africa. The two most commonly grown are the
  highly regarded arabica, and the less sophisticated but stronger and
  more hardy robusta. Once ripe, coffee berries are picked, processed,
  and dried. Dried coffee seeds (referred to as beans) are roasted to
  varying degrees, depending on the desired flavor. Roasted beans are
  ground and brewed with near-boiling water to produce coffee as a
  beverage.",
  tagline: "Coffee is more than a drink. For many of us — OK, for me —
  it's woven into the fabric of every day",
  end_date: Date.new(2018, 3, 27),
  funding_goal: 2500,
  creator_id: user2.id,
  category_id: 4,
  funded: 800
)

Reward.create(
  project_id: project18.id,
  title: "Starbucks",
  description: "One Pound of Coffee beans",
  cost: 10
)
Reward.create(
  project_id: project18.id,
  title: "Blue Bottle",
  description: "Ten Pounds of Coffee beans",
  cost: 90
)


project19 = Project.create!(
  title: "ENGINEERING THE PERFECT EGG",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1505333829/jakub-kapusnak-296865_mtag3z.jpg",
  description: "Eggs are laid by female animals of many different
  species, including birds, reptiles, amphibians, mammals, and fish, and
  have been eaten by humans for thousands of years. Bird and reptile
  eggs consist of a protective eggshell, albumen (egg white), and
  vitellus (egg yolk), contained within various thin membranes. The most
  popular choice for egg consumption are chicken eggs. Other popular
  choices for egg consumption are duck, quail, roe, and caviar.",
  tagline: "The bird fights its way out of the egg. The egg is the world.
   Whoever will be born must destroy a world.",
  end_date: Date.new(2018, 6, 15),
  funding_goal: 100000,
  creator_id: user1.id,
  category_id: 4,
  funded: 90000
)

Reward.create(
  project_id: project19.id,
  title: "Dozen",
  description: "Access to the Perfect Eggs for 12 months",
  cost: 100
)
Reward.create(
  project_id: project19.id,
  title: "Bakers Dozen",
  description: "Access to the Perfect Eggs for 13 months",
  cost: 110
)


project20 = Project.create!(
  title: "The Comic Book Project",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1505334956/mitch-rosen-203803_vky3da.jpg",
  description: "Comics is a medium used to express ideas by images,
  often combined with text or other visual information. Comics
  frequently takes the form of juxtaposed sequences of panels of images.
   Often textual devices such as speech balloons, captions, and
   onomatopoeia indicate dialogue, narration, sound effects, or other
   information. Size and arrangement of panels contribute to narrative
   pacing. Cartooning and similar forms of illustration are the most
   common image-making means in comics; fumetti is a form which uses
   photographic images. Common forms of comics include comic strips,
  editorial and gag cartoons, and comic books. Since the late 20th
  century, bound volumes such as graphic novels, comic albums, and
  tankobon have become increasingly common, and online webcomics have
  proliferated in the 21st century.",
  tagline: "a world-renowned literacy initiative that engages young people",
  end_date: Date.new(2018, 3, 19),
  funding_goal: 500,
  creator_id: user2.id,
  category_id: 4,
  funded: 245
)

Reward.create(
  project_id: project20.id,
  title: "A Page",
  description: "Receive a full page of comics from one of our students",
  cost: 5
)
Reward.create(
  project_id: project20.id,
  title: "A Whole Book",
  description: "Receive a book of comics from one of our students",
  cost: 20
)

project21 = Project.create!(
  title: "The Comic Book Project",
  image_url: "http://res.cloudinary.com/dj1l8etr0/image/upload/v1505336150/jon-tyson-228428_mllecu.jpg",
  description: "Comics is a medium used to express ideas by images,
  often combined with text or other visual information. Comics
  frequently takes the form of juxtaposed sequences of panels of images.
   Often textual devices such as speech balloons, captions, and
   onomatopoeia indicate dialogue, narration, sound effects, or other
   information. Size and arrangement of panels contribute to narrative
   pacing. Cartooning and similar forms of illustration are the most
   common image-making means in comics; fumetti is a form which uses
   photographic images. Common forms of comics include comic strips,
  editorial and gag cartoons, and comic books. Since the late 20th
  century, bound volumes such as graphic novels, comic albums, and
  tankobon have become increasingly common, and online webcomics have
  proliferated in the 21st century.",
  tagline: "a world-renowned literacy initiative that engages young people",
  end_date: Date.new(2018, 3, 19),
  funding_goal: 500,
  creator_id: user2.id,
  category_id: 4,
  funded: 245
)

Reward.create(
  project_id: project20.id,
  title: "A Page",
  description: "Receive a full page of comics from one of our students",
  cost: 5
)
Reward.create(
  project_id: project20.id,
  title: "A Whole Book",
  description: "Receive a book of comics from one of our students",
  cost: 20
)
