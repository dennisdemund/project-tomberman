class Tree {

    constructor() {
        this.leftBranchX = 350;
        this.leftBranchY = 30;
        this.rightBranchX = 480;
        this.rightBranchY = 30;
        this.branchWidth = 50;
        this.branchHeight = 25;

        this.branchType;
        this.mainTreeImage = new Image();
        this.mainTreeImage.src = "./pictures/main_tree.png";
        this.treeArr = [];
    }

    shuffle(array) {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    createRandomBranch() {
        let branchTypes = [0, 1, 2];
        let randomizer = this.shuffle(branchTypes);
        this.treeArr[0] = randomizer[0];

        switch (this.treeArr[0]) {
            case 0:
                console.log("Kein Branch erstellt");
                break;
            case 1:
                this.branchType = "left";
                this.branchImage = new Image();
                this.branchImage.src = "./pictures/branch_left.png";
                this.treeArr[0] = this.branchImage;
                console.log("created branch on the left")
                break;
            case 2:
                this.branchType = "right";
                this.branchImage = new Image();
                this.branchImage.src = "./pictures/branch_right.png";
                this.treeArr[0] = this.branchImage;
                console.log("created branch on the right")
                break;
        }

    }

    moveBranches() {

        for (let i = 0; i < this.treeArr.length; i++) {
            let newArr = [];
            newArr[i + 1] = this.treeArr[i];
            newArr.splice(9);
        }

        return newArr;
    }
}



