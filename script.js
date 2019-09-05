//Creating necessary EventHandlers
document.addEventListener("keydown", keyDownHandler);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        gameWindow.clearCharacter();
        player1.moveCharacter("right");
        gameWindow.clearBranches();
        gameWindow.drawCharacter();
        //gameWindow.drawHUD();
        player1Tree.moveBranches();
        player1Tree.createRandomBranch();
        gameWindow.drawBranches();

    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        gameWindow.clearCharacter();
        player1.moveCharacter("left");
        gameWindow.clearBranches();
        gameWindow.drawCharacter();
       // gameWindow.drawHUD();
        player1Tree.moveBranches();
        player1Tree.createRandomBranch();
        gameWindow.drawBranches();

    }
}

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
    player1Tree.createRandomBranch();
    player1Tree.moveBranches();
    gameWindow.clearBranches();
    gameWindow.drawBranches();

}

