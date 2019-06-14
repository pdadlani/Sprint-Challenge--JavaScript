// 1. Copy and paste your prototype in here and refactor into class syntax.



/* == Step 1: Base Class ==
  Created a class named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
  constructor({length, width, height}) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  // Created a method for CuboidMaker that returns the volume.
  volume() {
    return this.length * this.width * this.height;
  }

  // Created a method for CuboidMaker that returns the surface area.
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}


class CubeMaker extends CuboidMaker {
  constructor({length}) {
    super({length: length, width: length, height: length});
  }
}

/* Created a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})

const cube = new CubeMaker({
  length: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(cube.volume()); //125
console.log(cube.surfaceArea()); //150


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
