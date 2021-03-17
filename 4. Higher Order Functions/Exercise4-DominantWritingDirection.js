/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Write a function that computes the dominant writing direction in a string of
    text. Remember that each script object has a direction property that can be
    "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
    The dominant direction is the direction of a majority of the characters that
    have a script associated with them
 */

function dominantDirection(array) {
    let counterObj = []
    for (let e of array) {
        let name = e.direction;
        let direction = counterObj.findIndex((c) => c.name === name)
        if (direction === -1) {
            counterObj.push({name, counter: 1})
        } else {
            counterObj[direction].counter++
        }
    }
    if (counterObj.length > 0) {
        return counterObj.sort((a, b) => a.counter > b.counter ? 1 : -1).pop()
    }

}

let obj = [{direction: "ltr"}, {direction: "ltr"}, {direction: "rtl"}, {direction: "ttb"},
    {direction: "ltr"}, {direction: "rtl"}, {direction: "ttb"}, {direction: "ttb"}, {direction: "ttb"},];

console.log(dominantDirection(obj))
// {name: 'ttb' , counter: 4}

