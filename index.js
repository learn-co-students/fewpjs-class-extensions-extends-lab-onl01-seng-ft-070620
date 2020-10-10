class Polygon {
  constructor(intArray) {
    this.sides = intArray;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, acc) => total + acc);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let side1 = this.sides[0];
    let side2 = this.sides[1];
    let side3 = this.sides[2];
    let side4 = this.sides[3];
    return (side1 == side2 && side1 == side3 && side1 == side4) 
  }

  get area() {
    if (this.countSides !== 4) return false;
    return this.isValid ? this.sides[0] ** 2 : false;
  }
}

