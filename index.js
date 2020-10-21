class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce( (tot, i) => (tot + i), 0 )
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.sides[0] + this.sides[1] <= this.sides[2]) {
      return false
    } else if (this.sides[0] + this.sides[2] <= this.sides[1]) {
      return false
    } else if (this.sides[1] + this.sides[2] <= this.sides[0]) {
      return false
    }
    return true
  }
}

class Square extends Polygon {
  get isValid() {
    return (this.perimeter / 4 === this.sides[0])
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}
