var buttonColours = ["red","blue","yellow","green"];
 
var gamePettern = [];

var userClickedPattern = [];

var started = false;
var level=0;

$(document).keypress(function(){
    if(!started){
        started = true;
        $("h1").text("Level "+ level);
        nextSequence();
    }

});

$(".btn").click(function() {
    var userChosedColor = this.id;
    userClickedPattern.push(userChosedColor);
    playSound(userChosedColor);
    //console.log(userChosedColor);
    checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel){
    
    if(userClickedPattern[currentLevel] === gamePettern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePettern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        playSound("wrong");
        console.log("fail");
        $("h1").html("Wrong. Press any key to play again.");
        startOver();
    }
}

function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level "+ level);
    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColor = buttonColours[randomNumber];
    gamePettern.push(randomChosenColor);
    // console.log(randomNumber);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    started = false;
    level = 0;
    gamePettern = [];
  }
