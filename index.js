var buttonColours = ["red","blue","green","yellow"];
var pattern = [];
var userPattern = [];
var started = false;
var levelNumber = 0;


$(".btn").click(function() {
  var userColour = $(this).attr("id");
  userPattern.push(userColour);
  animatePress(userColour);
  checkAnswer(userPattern.length-1);
});

$(document).keypress(function(event){
  if(!started){
    nextColour();
    started = true;
  };
});

function nextColour(){
  userPattern = [];
  levelNumber++;
  $(".title").text("Level "+levelNumber);
  var randomNumber =  (Math.floor(Math.random() * 4));
  var colourChoosen = buttonColours[randomNumber];
  pattern.push(colourChoosen);
  for(let i = 0; i < pattern.length; i++){
    setTimeout(function() {
      animatePress(pattern[i]);
    }, 500 * i);
  }

};

function checkAnswer(answers){
  if(pattern[answers]===userPattern[answers]){
      if(pattern.length===userPattern.length){
        setTimeout(function() {
          nextColour();
        }, 600);
      }
  }
  else{
    $(".title").text("Game Over, Press any key to restart");
    playSound("wrong");
    $("body")[0].classList.toggle("game-over");
    setTimeout(function() {
      $("body")[0].classList.toggle("game-over");
    }, 200);
    startOver();
  }
};


function startOver(){
  started = false;
  pattern = [];
  userPattern = [];
  started = false;
  levelNumber = 0;
  answers = 0;
};

function playSound(colour){
  var audio = new Audio("sounds/"+colour+ ".mp3");
  audio.play();
};

function animatePress(colour){
  $("."+colour)[0].classList.toggle("clicked");
  setTimeout(function() {
    $("."+colour)[0].classList.toggle("clicked");
  }, 100);
};
