// pry = require('pryjs')

class Polygon {
    constructor(array) {
        this.sides = array
        this.count = this.sides.length
    }

    get countSides() {
        return this.array.length
    }
    get perimeter() {
        return this.array.reduce((side, total) => side + total) // may need a possilbe bind here
    }
}

class Triangle extends Polygon {

    get isValid() {
        let validSide1 = (this.array[0] + this.array[1]) > this.array[2]
        let validSide2 = (this.array[1] + this.array[2]) > this.array[0]
        let validSide3 = (this.array[0] + this.array[2]) > this.array[1]

        let validSides = validSide1 && validSide2 && validSide3

        if (this.countSides === 3 && validSides) return true
        return false
    }
}

class Square extends Polygon {

    get isValid() {
        let validSide1 = this.array[0] === this.array[1]
        let validSide2 = this.array[1] === this.array[2]
        let validSide3 = this.array[0] === this.array[2] 

        let validSides = validSide1 && validSide2 && validSide3

        if (this.countSides === 4 && validSides) return true
        return false
    }

    get area() {
        if (this.isValid) return this.array[0]**2
        return "Not a square"
    }
}