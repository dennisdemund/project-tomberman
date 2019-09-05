class Gamewindow {

    constructor() {
        this.width = 1000;
        this.height = 800;
        this.characterY = this.height - 70;
        this.mainTreeX = 400;
        this.mainTreeY = 20;
    }

    createBackground() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.backgroundImage = new Image();
        this.backgroundImage.src = "./pictures/game_background.png";
    }

    drawHUD() {
        this.ctx.font = "30px Arial";
        this.ctx.fillText(player1.score,440,150);
    }

    drawCharacter() {
        this.ctx.drawImage(player1.characterImage, player1.characterX, this.characterY, player1.characterWidth, player1.characterHeight);
    }

    clearCharacter() {
        this.ctx.clearRect(player1.characterX, this.characterY, player1.characterWidth, player1.characterHeight);
    }

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

}
