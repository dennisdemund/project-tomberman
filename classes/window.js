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
        console.log(player1Tree.treeArr.length);
        for (let i = 0; i < player1Tree.treeArr.length; i++) {
            if (player1Tree.branchType == "left") {
                console.log("drawing branch on the left side")
                console.log(player1Tree.treeArr[i]);
                console.log(player1Tree.leftBranchX);
                console.log(player1Tree.leftBranchY);
                console.log(player1Tree.branchWidth);
                console.log(player1Tree.branchHeight);
                this.ctx.drawImage(player1Tree.treeArr[i], player1Tree.leftBranchX, player1Tree.leftBranchY, player1Tree.branchWidth, player1Tree.branchHeight);
            }

            if (player1Tree.branchType == "right") {
                console.log("drawing branch on the right side")
                console.log(player1Tree.treeArr[i]);
                console.log(player1Tree.rightBranchX);
                console.log(player1Tree.rightBranchY);
                console.log(player1Tree.branchWidth);
                console.log(player1Tree.branchHeight);
                this.ctx.drawImage(player1Tree.treeArr[i], player1Tree.rightBranchX, player1Tree.rightBranchY, player1Tree.branchWidth, player1Tree.branchHeight);
            }
        }
    }

}
