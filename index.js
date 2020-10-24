class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let total = 0
    for (let i = 0; i < this.sides.length; i++) {
      total += this.sides[i] 
    }
    return total
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
      return true
    }
    else {
      return false
    }
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[1] === this.sides[3]) {
      return true
    }
    else {
      return false
    }
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}