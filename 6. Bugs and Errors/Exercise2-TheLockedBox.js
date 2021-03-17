/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
Consider the following (rather contrived) object:
*

const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

It is a box with a lock. There is an array in the box, but you can get at it only
when the box is unlocked. Directly accessing the private _content property is
forbidden.
Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box
is locked again before returning, regardless of whether the argument function
returned normally or threw an exception.
For extra points, make sure that if you call withBoxUnlocked when the box
is already unlocked, the box stays unlocked
 */

const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [1,2,3,4,5,6,7,8,9],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    },
    withBoxUnlocked(action) {
        let wasPreviousLocked = this.locked
        this.locked = false
        try {action(this.content)}
        catch (e) {

        }
        finally
        {
            this.locked = wasPreviousLocked;
        }

    }

};

console.log(box.content)
// Thrown Locked Exception
box.unlock()
console.log(box.content)
// [1,2,3,4,5,6,7,8,9]
box.withBoxUnlocked((c) => {
    console.log(c)
    // [1,2,3,4,5,6,7,8,9]
    throw new Error()
})
// Still works