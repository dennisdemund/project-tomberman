class Gamewindow {

    constructor(e) {
        this.width = 1000;
        this.height = 800;
        this.characterY = this.height - 80;
        this.mainTreeX = 400;
        this.mainTreeY = 20;
        this.progressBar = e;
        this.counter = 100;
        this.interval = 70;
    }

    //updating the progressBar
    updateProgressBar() {
        console.log(this.interval);
        let finished = setInterval(() => {
            if (this.counter == 0) {
                clearInterval(finished);
                window.alert("Your Time´s up! Better Luck next Time!");
                setupNewGame();
            } else {
                this.counter--;
                this.progressBar.style.width = this.counter + '%';
            }
        }, this.interval);
    }

    //initializing the main background
    createBackground() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }


    //functions for the score system
    refreshCurrentScore() {
        document.getElementById("score").innerHTML = `Current Score: ${player1.score}`;
    }

    refreshHighscore() {
        if (player1.score > player1.highscore) {
            player1.highscore = player1.score
            document.getElementById("highscore").innerHTML = `High Score: ${player1.highscore}`;
        }
    }

    //character functions
    drawCharacter() {
        this.ctx.drawImage(player1.characterImage, player1.characterX, this.characterY, player1.characterWidth, player1.characterHeight);
    }

    clearCharacter() {
        this.ctx.clearRect(player1.characterX, this.characterY, player1.characterWidth, player1.characterHeight);
    }

    //tree and branches functions
    drawTree() {
        this.treeWidth = this.canvas.width / 10;
        this.treeHeight = this.canvas.height;
        this.ctx.drawImage(player1Tree.mainTreeImage, this.mainTreeX, this.mainTreeY, this.treeWidth, this.treeHeight);
    }

    drawBranches() {
        for (let i = 0; i < player1Tree.treeArr.length; i++) {
            if (player1Tree.treeArr[i] == 1) {
                this.ctx.drawImage(player1Tree.branchImageLeft, player1Tree.leftBranchX, player1Tree.leftBranchY + (i * 120), player1Tree.branchWidth, player1Tree.branchHeight);
            }

            if (player1Tree.treeArr[i] == 2) {
                this.ctx.drawImage(player1Tree.branchImageRight, player1Tree.rightBranchX, player1Tree.rightBranchY + (i * 120), player1Tree.branchWidth, player1Tree.branchHeight);
            }

        }
    }

    clearBranches() {
        for (let i = 0; i < player1Tree.treeArr.length; i++) {
            if (player1Tree.treeArr[i] == 1) {
                this.ctx.clearRect(player1Tree.leftBranchX, player1Tree.leftBranchY + (i * 120), player1Tree.branchWidth, player1Tree.branchHeight);
            }
            if (player1Tree.treeArr[i] == 2) {
                this.ctx.clearRect(player1Tree.rightBranchX, player1Tree.rightBranchY + (i * 120), player1Tree.branchWidth, player1Tree.branchHeight);
            }

        }
    }

    //"collision detection"
    checkForCollision() {
        player1.score++;
        if (player1Tree.treeArr[6] == 1 && player1.characterPos == "left" || player1Tree.treeArr[6] == 2 && player1.characterPos == "right") {
            window.alert("GAME OVER!");
            setupNewGame();
        }
    }

}