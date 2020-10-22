// Your code here
class Polygon
{
    constructor(sides)
    {
        this.sides = sides
    }

    get countSides()
    {
        return this.sides.length
    }

    get perimeter()
    {
        return this.sides.reduce((total, e) => total + e, 0)
    }
}

class Triangle extends Polygon
{
    get isValid()
    {
        let [a, b, c] = this.sides
        if(a + b < c || b + c < a || a + c < b)
        {
            return false
        }
        return true
    }
}

class Square extends Polygon
{
    get area()
    {
        let s = this.sides[0]
        return s * s
    }

    get isValid()
    {
        let [a, b, c, d] = this.sides
        if(a == b && a == c && a == d)
        {
            return true
        }
        return false
    }

}