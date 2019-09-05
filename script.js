//Creating necessary EventHandlers
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        gameWindow.clearCharacter();
        player1.moveCharacter("right");
        gameWindow.clearBranches();
        gameWindow.drawCharacter();
        gameWindow.drawHUD();
        player1Tree.moveBranches();
        gameWindow.checkForCollision();
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
        player1Tree.createRandomBranch();
        gameWindow.drawBranches();

    }
}

function createProgressbar(id, duration, callback) {
    // We select the div that we want to turn into a progressbar
    var progressbar = document.getElementById(id);
    progressbar.className = 'progressbar';
  
    // We create the div that changes width to show progress
    var progressbarinner = document.createElement('div');
    progressbarinner.className = 'inner';
  
    // Now we set the animation parameters
    progressbarinner.style.animationDuration = duration;
  
    // Eventually couple a callback
    if (typeof(callback) === 'function') {
      progressbarinner.addEventListener('animationend', callback);
    }
  
    // Append the progressbar to the main progressbardiv
    progressbar.appendChild(progressbarinner);
  
    // When everything is set up we start the animation
    progressbarinner.style.animationPlayState = 'running';
  }
  
  addEventListener('load', function() {
    createProgressbar('progressbar3', '20s', function() {
      alert('Time´s Up! Better Luck Next Time!');
      window.location.reload(); 
    });
  });

//Creating Objects from other classes
player1Tree = new Tree();
player1 = new Player();
gameWindow = new Gamewindow();


window.onload = () => {
    document.getElementById("myCanvas").style.background = "";
    gameWindow.createBackground();
    gameWindow.drawCharacter();
    gameWindow.drawTree();
    gameWindow.drawHUD();
}

