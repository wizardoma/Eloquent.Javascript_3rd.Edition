/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Implement every as a function that takes an array and a predicate function
    as parameters. Write two versions, one using a loop and one using the some
    method.
 */

function every(array, test) {
    for (let e of array) {
        if (!test(e)) {
            return false;
        }
    }
    return true;
}

function usingSome(array) {
    let isEven = array.some(e => e % 2 === 0);
    let isOdd = array.some(e => e % 2 !== 0);

    return (isEven && !isOdd)

}

let arrayEven = [2, 6, 4, 10, 6, 4, 20, 2, 4, 6];
let arrayOdd = [2, 3, 4, 5, 6, 4, 5, 2, 4, 5];

let isEven = every(arrayOdd, (e => e % 2 === 0))
console.log(isEven)
console.log(usingSome(arrayOdd))
// false

isEven = every(arrayEven, (e => e % 2 === 0))
console.log(isEven)
console.log(usingSome(arrayEven))
// true