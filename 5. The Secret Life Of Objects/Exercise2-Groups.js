/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Write a class called Group (since Set is already taken). Like Set, it has add,
    delete, and has methods. Its constructor creates an empty group, add adds
    a value to the group (but only if it isn’t already a member), delete removes
    its argument from the group (if it was a member), and has returns a Boolean
    value indicating whether its argument is a member of the group.
    Use the === operator, or something equivalent such as indexOf, to determine
    whether two values are the same.
    Give the class a static from method that takes an iterable object as argument
    and creates a group that contains all the values produced by iterating over it.
 */

class Group {
    constructor(values) {
        if (values === null || values === undefined) {
            this.values = []
        } else this.values = values;
    }

    add(value) {
        if (!this.values.includes(value)) {
            this.values.push(value)
        }
    }

    delete(value) {
        if (this.values.includes(value)) {
            delete this.values[this.values.indexOf(value)]
        }
    }

    toString() {
        return `${this.values.toString()}`
    }

    has(value) {
        return this.values.includes(value)
    }

    static from(array) {
        let values = []
        for (let e of array) {
            values.push(e)
        }
        return new Group(values)
    }
}


let group = new Group();
group.add("Alex")
console.log(group.has("Alex"))
// true
group.delete("Alex")
console.log(group.has("Alex"))
// false
let fromIterable = Group.from([1, 2, 4, 5, 6]);
console.log(fromIterable.has(2))
// true
console.log(fromIterable.toString())
//1,2,4,5,6
fromIterable = Group.from([{a: 1, b: 2}])
console.log(fromIterable.toString())
