/**
 * @author Ibekason Alexander Ibekason
 */


/*
    Write a function deepEqual that takes two values and returns true only if they
    are the same value or are objects with the same properties, where the values
    of the properties are equal when compared with a recursive call to deepEqual.
 */

const deepEquals = (a, b) => {
    if (typeof a == "object" && typeof b == "object") {
        // Check if values and keys are the same first

        let aKeysLength = Object.keys(a).length;
        let bKeysLength = Object.keys(b).length;
        let aValuesLength = Object.values(a).length;
        let bValuesLength = Object.values(b).length;
        if ((aKeysLength === bKeysLength) && (aValuesLength === bValuesLength)) {
            // Iterate over the keys and values and compare each
            for (let i = 0; i < aKeysLength; i++) {
                if ((Object.keys(a)[i] === Object.keys(b)[i]) && (Object.values(a)[i] === Object.values(b)[i])) {

                }
                else return false

            }
            return true
        } else return false;

    }
}
let a = {
    key: 2,
    value: 3
}

let b = {
    key: 2,
    value: 4,
}

let c = {
    key: 2,
    value: 3
}

console.log(deepEquals(a, c))
// true
