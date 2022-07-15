var query = [
  "Why did the chicken cross the road?",
  "What two things can you never eat for breakfast?",
  "What gets wetter the more it dries?",
  "What word is spelled incorrectly in every dictionary?",
  "What never asks a question, but gets answered all the time?",
  "What starts with E, and ends with E, but only has one letter in it?",
  "How do you make the number 1 disappear?",
  "What can be caught, but never thrown?",
  "Thanks to me, you can see straight through the wall. What am I?",
  "Which weighs more: a pound of feathers? or a pound of bricks.",
  "Everyone in the world needs it,\n but they usually give it without taking it. What is it?",
  "What belongs to you, but gets used by everyone else more than you?",
  "What bird can lift the most weight?",
  "How much dirt is there in a hole, that's 5 ft wide, and 5 ft deep?",
  "What has 3 feet, but cant walk?",
  "What's as big as an elephant, but weighs absolutely nothing?",
  "If i have it, I don't share it. If I share it, I don't have it. What am I?",
  "What is it- that lives if it is fed, and dies if you give it a drink?",
  "What is it- that goes up, but never comes down?",
  "I have teeth, but can't eat. What am I?",
  "What can run but not walk?",
  "Is it legal, for a man to marry his widow's sister?",
  "What has a neck, but no head?",
  "What moves faster, heat, or cold?",
  "What's full of holes but can still hold liquid?",
  "I'm as light as a feather, but not even the strongest\n man can hold me for more than 5 minutes. What am I?"
];

var punchline = [
  "To get to the other side.",
  "Lunch and dinner.",
  "A towel.",
  "INCORRECTLY",
  "Your cellphone.",
  "An envelope.",
  "Add the letter G, then it's GONE.",
  "A cold.",
  "A window.",
  "NEITHER. They both weigh exactly one pound.",
  "Advice.",
  "Your name.",
  "A crane.",
  "None.",
  "A yardstick.",
  "It's shadow.",
  "A secret.",
  "Fire.",
  "Age.",
  "A comb.",
  "Raindrops.",
  "No. But since he is dead, it would be hard to do so.",
  "A bottle.",
  "Heat, because you can always catch a cold.",
  "A sponge.",
  "Breath."
];

var ha = [
  "Ha lol.",
  "hahaha",
  "atatat",
  "xaxaxaax",
  "55555",
  "lololololol",
  "XDXD",
  "LOL",
  "jajajajajaja",
  "HHAHAHA",
  "LOLOLOL",
  "WOLOLO",
  ".... .- .... .- .... .-",
  "Muahahahaha",
  "kakakakaka",
  "yes that was very very funny",
  "no",
];

var Question;
var Punch;
var Laughs;
var bg;
var bb;
var br;
var pop;
var turk;

function preload() {
  soundFormats("mp3");
  pop = loadSound("Pop1");
  soundFormats("wav");
  turk = loadSound("turkey");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = random(125, 255);
  br = random(125, 255);
  bb = random(125, 255);
  background(br, bg, bb);
  textFont("Comic Neue", 12);
  textAlign(CENTER);
  textSize(20)
  Question = random(query);
  Punch = random(punchline);
  Laughs = random(ha);
}

function draw() {
  background(br, bg, bb);
  textSize(20)
  fill(0)
  text(Question, windowWidth / 2, windowHeight / 2 - 60);
  text(Punch, windowWidth / 2, windowHeight / 2);
  text(Laughs, windowWidth / 2, windowHeight / 2 + 60);
  textSize(50)
  fill(br-70,bg-70,bb-70)
  text("Random Joke Generator",windowWidth/2,70)
  textSize(20)
  text("Click to generate.",windowWidth/2,110)
  textSize(10)
  fill(br-15,bg-15,bb-15)
  text("T for turkey.",windowWidth/2,windowHeight-20)
}

function keyPressed() {
  if(keyCode == 84) {
    turk.play();
  }
}

function mouseClicked() {
  pop.play();
  Question = random(query);
  Punch = random(punchline);
  Laughs = random(ha);
  bg = random(125, 255);
  br = random(125, 255);
  bb = random(125, 255);
}
