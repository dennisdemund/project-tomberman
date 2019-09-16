//Creating necessary EventHandlers
document.addEventListener("keydown", keyDownHandler);

//These are needed for the background music
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('soundtracks/gameSoundtrack.mp3');
}
function setup() {
  mySound.setVolume(0.4);
  mySound.play();
}

//Setup game will be called after a GAME OVER
function setupNewGame() {
  gameWindow.createBackground();
  gameWindow.drawCharacter();
  gameWindow.drawTree();
  player1Tree.clearTree();
  player1.score = 0;
  clickCount = 0;
  gameWindow.counter = 100;
}

//functionality after making a "<-" or "->" move
let clickCount = 0;
function keyDownHandler(e) {
  if (clickCount === 0) {
    gameWindow.updateProgressBar();
    clickCount++;
  }
  if (e.key == "Right" || e.key == "ArrowRight") {
    gameWindow.clearCharacter();
    player1.moveCharacter("right");
    gameWindow.clearBranches();
    gameWindow.drawCharacter();
    player1Tree.moveBranches();
    gameWindow.checkForCollision();
    gameWindow.refreshCurrentScore();
    gameWindow.refreshHighscore();
    gameWindow.counter = gameWindow.counter + 2;
    player1Tree.createRandomBranch();
    gameWindow.drawBranches();

  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    gameWindow.clearCharacter();
    player1.moveCharacter("left");
    gameWindow.clearBranches();
    gameWindow.drawCharacter();
    player1Tree.moveBranches();
    gameWindow.checkForCollision();
    gameWindow.refreshCurrentScore();
    gameWindow.refreshHighscore();
    gameWindow.counter = gameWindow.counter + 2;
    player1Tree.createRandomBranch();
    gameWindow.drawBranches();

  }
}

//Creating Objects from other classes
player1Tree = new Tree();
player1 = new Player();
gameWindow = new Gamewindow(document.getElementById("myprogressBar"));


//Loading the HTML
window.onload = () => {
  gameWindow.createBackground();
  gameWindow.drawCharacter();
  gameWindow.drawTree();
}
