// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter () {
        return this.sides.reduce(function(acc, current) {
            return acc + current
        })
    }
}

class Triangle extends Polygon {
    get a() { return this.sides[0] }
    get b() { return this.sides[1] }
    get c() { return this.sides[2] }
    
    get isValid() {
        if (this.countSides !== 3) {
            return false
        } else if (this.a >= this.b+this.c || this.b >= this.a+this.c || this.c >= this.a+this.b) {
            return false
        } else {return true}
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides.reduce(function(acc, s) {return acc+s}) !== this.sides[0]*4) {
            return false
        } else {
            return true
        }
    }
    
    get area() {return this.sides[0]**2}
}