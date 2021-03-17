/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Use the reduce method in combination with the concat method to “flatten”
    an array of arrays into a single array that has all the elements of the original
    arrays.
 */

let arrayOfArrays = [
    [1, 2], [3, 4], [5, 6], [7, 8], [9, 10]
]

console.log(arrayOfArrays.reduce((a, b) => a.concat(b)));
// [1,2,3,4,5,6,7,8,9,10]