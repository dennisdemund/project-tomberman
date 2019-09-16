class Tree {

    constructor() {
        this.leftBranchX = 350;
        this.leftBranchY = 50;
        this.rightBranchX = 480;
        this.rightBranchY = 50;
        this.branchWidth = 70;
        this.branchHeight = 25;

        this.branchType;
        this.mainTreeImage = new Image();
        this.mainTreeImage.src = "./pictures/main_tree.png";
        this.branchImageLeft = new Image();
        this.branchImageLeft.src = "./pictures/branch_left.png";
        this.branchImageRight = new Image();
        this.branchImageRight.src = "./pictures/branch_right.png";
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
    }

    moveBranches() {
        this.treeArr.unshift(0);
    }

    clearTree(){
        this.treeArr = [];
    }
}