class Player {

    constructor() {
        this.characterX = 340;
        this.characterWidth = 70;
        this.characterHeight = 70;
        this.characterPos = "left";
        this.characterImage = new Image();
        this.characterImage.src = "./pictures/character_standing.png";
        this.score = 0;
    }

    moveCharacter(direction) {
        if (direction == "right" && this.characterPos == "left") {
            this.characterX += 150;
            this.characterPos = "right";
        }

        if (direction == "left" && this.characterPos == "right") {
            this.characterX -= 150;
            this.characterPos = "left";
        }
    }
}