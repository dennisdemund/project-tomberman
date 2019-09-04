class Tree {

    constructor() {
        this.leftBranchX = 350;
        this.leftBranchY = 30;
        this.leftBranchWidth = 50;
        this.leftBranchHeight = 25;

        this.rightBranchX = 480;
        this.rightBranchY = 30;
        this.rightBranchWidth = 50;
        this.rightBranchHeight = 25;

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
        let randomizer = shuffle(branchTypes);
        this.treeArr[0] = randomizer[0];

        switch (treeArr[0]) {
            case 0:
                continue;
            case 1:
                this.leftBranchImage = new Image();
                this.leftBranchImage.src = "./pictures/branch_left.png";
            case 2:
                this.rightBranchImage = new Image();
                this.rightBranchImage.src = "./pictures/branch_right.png";
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



