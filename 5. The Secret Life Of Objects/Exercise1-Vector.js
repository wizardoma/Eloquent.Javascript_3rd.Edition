/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Write a class Vec that represents a vector in two-dimensional space. It takes
    x and y parameters (numbers), which it should save to properties of the same
    name.
    Give the Vec prototype two methods, plus and minus, that take another
    vector as a parameter and return a new vector that has the sum or difference
    of the two vectors’ (this and the parameter) x and y values.
    Add a getter property length to the prototype that computes the length of
    the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */

class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y)
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y)
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }


}

let vec1 = new Vec(4, 6);
console.log(vec1.length)
// 7.2111

let vec2 = new Vec(5, 7)
console.log(vec1.plus(vec2))
// Vec {x:9 , y:13}

console.log(vec1.minus(vec2))
// x:-1, y:-1