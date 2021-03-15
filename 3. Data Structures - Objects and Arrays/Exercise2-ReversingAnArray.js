/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear. For this exercise, write two functions, reverseArray
    and reverseArrayInPlace. The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order. The
    second, reverseArrayInPlace, does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the
    standard reverse method.
 */

const reverseArray = (arr) => {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    console.log(arr === reversedArray)
    // false
    return reversedArray;
}

const reverseArrayInPlace = (arr) => {
    let reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i])
    }
    arr = reversedArray;
    console.log(arr === reversedArray)
    // true
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]))
