class Player {

    constructor() {
        this.characterX = 340;
        this.characterWidth = 70;
        this.characterHeight = 80;
        this.characterPos = "left";
        this.characterImage = new Image();
        this.characterImage.src = "./pictures/character_standing.png";
        this.characterImageLeft = new Image();
        this.characterImageLeft.src = "./pictures/character_standing_left.png";
        this.characterImageRight = new Image();
        this.characterImageRight.src = "./pictures/character_standing_right.png";
        this.score = 0;
    }

    moveCharacter(direction) {
        if (direction == "right" && this.characterPos == "left") {
            this.characterX += 150;
            this.characterPos = "right";
            this.characterImage.src = this.characterImageRight.src;
        }

        if (direction == "left" && this.characterPos == "right") {
            this.characterX -= 150;
            this.characterPos = "left";
            this.characterImage.src = this.characterImageLeft.src;
        }
    }
}