// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5,
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Class cuboid volume method:", cuboid2.volume()); // 100
console.log("Class cuboid surface area method:", cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(attributes){
        super(attributes);
    }
    cubeVolume(){
        return this.length ** 3;
    }
    cubeSurfaceArea(){
        return 6 * this.length ** 2;
    }
}

const cubeTest = new CubeMaker({
    length: 4,
    width: 4,
    height: 4,
})

console.log("Class cube volume method:", cubeTest.volume()); // 64
console.log("Class cube surface area method:", cubeTest.surfaceArea()); // 96