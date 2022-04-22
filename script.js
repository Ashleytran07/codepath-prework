// global constants
const clueHoldTime = 150; //how long to hold each clue's light/sound
const cluePauseTime = 100; //how long to pause in between clues
const nextClueWaitTime = 150; //how long to wait before starting playback of the clue sequence

//Global Variables
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1; // must be bw 0.0-1.0
var guessCounter = 0;
var pattern = [];
var mistakes = 0; // count mistakes
document.getElementById("mistakes").innerHTML = mistakes + " mistakes made";
var timeLeft = 20;
// var interval;
// setInterval() = (timeLeft, 1500);


function getRandomInt(max)
{
  return Math.floor(Math.random() * max);
}

function newPattern()
{
    pattern = []; // initialize back to nothing
    for(let i = 0; i  <= 5; i++)
    {
      pattern.push(getRandomInt(7));
    }
}


// // begin functions
function startGame(){
  
    //initialize game variables
    mistakes = 0;
    progress = 0;
    gamePlaying = true;
    newPattern();
    timeLeft = 21;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    // interval = setInterval(timeLeft, 1500);
    countdown();
}

// stop function
function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  stopTone();
  mistakes = 0;
  countdown();
  // clearInterval(interval);
  // timeLeft = 15;
  // document.getElementById("time").innerHTML = "time left: " + timeLeft;
}

// restart function
function restartGame()
{
  mistakes = 0;
  if(!gamePlaying)
  {
    startGame();
  }
}

// ————————————————————generating sound——————————————————————
// Sound Synthesis Functions
const freqMap = {
  1: 261.6, //Middle C
  2: 293.7, //D
  3: 329.6, //E
  4: 392.0, //G
  5: 349.2, //F
  6: 440.0, //A
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

//——————lighting/clearing a button——————————————————————
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//—————————playing clues—————————————————————————
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}
//————————————————countdown————————————————————————————————
function countdown(){
  
  const element = document.getElementById("timerBar");
  let width = 100.0;
  const id = setInterval(second,1000);
  function second(){
    if (timeLeft <= 0){
      clearInterval(id);
      loseGame();
      document.getElementById("timerBar").classList.add("hidden");
      timeLeft = 21;
      element.style.width = 100.0;
    } else if(gamePlaying){
      width-=6.67;
      timeLeft--;
      document.getElementById("time").innerHTML = "time left: " + timeLeft;
      element.style.width = width + '%';
    }
    else{
      clearInterval(id);
    }
  }
}

// // start countdown
// function startCount(){
//   if(!gamePlaying){
//     return;
//   }
//   interval = setInterval(timeLeft, 1500);
// }

// // stop coundown
// function stopCount(){
//   clearInterval(interval);
//   if(gamePlaying && timeleft < 0){
//     startCount();
//   }
//   timeLeft = 15;
//   document.getElementById("time").innerHTML = "time left: " + timeLeft;
// }

//————————————————win/loss notifs——————————————————————————
function loseGame(){
  stopGame();
  mistakes = 0;
  alert("game over :( ");
  //restartGame();
  document.getElementById("mistakes").innerHTML = mistakes + " mistakes made";
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
}

function winGame(){
  stopGame();
  alert("great job! :) ");
  mistakes = 0;
  document.getElementById("mistakes").innerHTML = mistakes + " mistakes made";
}

//———————————————handling guesses———————————————————————————
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    
  //Guess was correct!
    if(guessCounter == progress){
      //GAME OVER: WIN!
      if(progress == pattern.length - 1){
        winGame();
      }
      else
      {
      //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
  }else{
    //so far so good... check the next guess
    guessCounter++;
  }
    
}else{
  //Guess was incorrect
  mistakes++;  
  
  if(mistakes <= 3)
  {
    document.getElementById("mistakes").innerHTML = mistakes + " mistakes made";
    playClueSequence();
  }
  //GAME OVER: LOSE!
  else
  {
    mistakes = 0;
    loseGame();
  }
}
}

