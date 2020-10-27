class Polygon {
  constructor(sides){
    this.sides = sides;
    this.count = sides.length;
  }

  get countSides(){
    return this.count;
  }

  get perimeter(){
    let sum = 0;
    for (let length of this.sides){
      sum += length;
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !== 4) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
  }

  get area() {
    if (this.count !== 4) return;
    return this.sides[0] **2
  }
}