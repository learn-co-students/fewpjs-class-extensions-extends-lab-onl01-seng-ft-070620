class Polygon {
    constructor(sides) {
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        if (!Array.isArray(this.sides)) {
            return;
        }
        let total = 0;
        for (let x of this.sides) {
            total += x;
        }
        return total;
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((!Array.isArray(this.sides)) || (this.count !== 3)) {
            return;
        }
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        return ((a + b > c) && (a + c > b) && (b + c > a));
    }
}

class Square extends Polygon {
    get isValid() {
        if ((!Array.isArray(this.sides)) || (this.count !== 4)) {
            return;
        }
        let a = this.sides[0];
        let b = this.sides[1];
        let c = this.sides[2];
        let d = this.sides[3];
        return ((a === b) && (a === c) && (a === d));
    }

    get area() {
        if ((!Array.isArray(this.sides)) || (this.count !== 4)) {
            return;
        }
        return this.sides[0] * this.sides[0];
    }
}