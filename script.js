//Creating necessary EventHandlers
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        gameWindow.clearCharacter();
        player1.moveCharacter("right");
        gameWindow.drawCharacter();
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        gameWindow.clearCharacter();
        player1.moveCharacter("left");
        gameWindow.drawCharacter();

    }
}

//Creating Objects from other classes
player1Tree = new Tree();
player1 = new Player();
gameWindow = new Gamewindow();


//Before starting the game
window.onload = () => {
    document.getElementById("myCanvas").style.background = "";
    gameWindow.createBackground();
    gameWindow.drawCharacter();
    gameWindow.drawTree();
    player1Tree.createRandomBranch();
    gameWindow.drawBranches();
}
