class Gamewindow {

    constructor(){
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

    drawBackground() {
        this.ctx.drawImage(this.backgroundImage,0,0, this.canvas.width, this.canvas.height);
    }

    drawCharacter() {
        this.ctx.drawImage(player1.characterImage,player1.characterX,this.characterY,player1.characterWidth,player1.characterHeight);
    }

    clearCharacter() {
        this.ctx.clearRect(player1.characterX,this.characterY,player1.characterWidth,player1.characterHeight);
    }

    drawTree() {
        this.treeWidth = this.canvas.width / 10;
        this.treeHeight = this.canvas.height;
        this.ctx.drawImage(player1Tree.mainTreeImage,this.mainTreeX,this.mainTreeY,this.treeWidth,this.treeHeight);
    }

}
