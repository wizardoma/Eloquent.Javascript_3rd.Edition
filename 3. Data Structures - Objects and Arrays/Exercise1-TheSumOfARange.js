/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Write a range function that takes two arguments, start and end, and returns
    an array containing all the numbers from start up to (and including) end.
    Next, write a sum function that takes an array of numbers and returns the
    sum of these numbers.
 */

const range = (start, end) => {
    let arr = [];
    for (let i =start; i<=end; i++) {
        arr.push(i);
    }
    return arr
}

const sum = (arr)=> {
    let result = 0;
    for (let i =0; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}

console.log(sum(range(1,10)))
// 55

