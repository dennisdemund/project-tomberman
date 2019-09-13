//Creating necessary EventHandlers
document.addEventListener("keydown", keyDownHandler);

//Initializing helpful variables which are needed for the progress bar
var element = document.getElementById("myprogressBar");    
var counter = 100;

//Initializing functions for game functionality and additional features like background Music
function updateProgressBar() { 
    var finished = setInterval(scene, 70); 
    function scene() { 
      if (counter == 0) { 
        clearInterval(finished);
        window.alert("Your Time´s up! Better Luck next Time!");
        window.location.reload();
      } else { 
        counter--;  
        element.style.width = counter + '%';  
      } 
    } 
  } 

function preload() {
    soundFormats('mp3', 'ogg');
    mySound = loadSound('soundtracks/gameSoundtrack.mp3');
}

function setup() {
    mySound.setVolume(0.4);
    mySound.play();
}

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        gameWindow.clearCharacter();
        player1.moveCharacter("right");
        gameWindow.clearBranches();
        gameWindow.drawCharacter();
        gameWindow.drawHUD();
        player1Tree.moveBranches();
        gameWindow.checkForCollision();
        counter = counter + 2;  
        player1Tree.createRandomBranch();
        gameWindow.drawBranches();
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        gameWindow.clearCharacter();
        player1.moveCharacter("left");
        gameWindow.clearBranches();
        gameWindow.drawCharacter();
        gameWindow.drawHUD();
        player1Tree.moveBranches();
        gameWindow.checkForCollision();
        counter = counter + 2;  
        player1Tree.createRandomBranch();
        gameWindow.drawBranches();
    }
}

//Creating Objects from other classes
player1Tree = new Tree();
player1 = new Player();
gameWindow = new Gamewindow();


//Loading the HTML
window.onload = () => {
    gameWindow.createBackground();
    gameWindow.drawCharacter();
    gameWindow.drawTree();
    gameWindow.drawHUD();
    updateProgressBar();
}
