/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception
    of type MultiplicatorUnitFailure. Write a function that wraps this clunky
    function and just keeps trying until a call succeeds, after which it returns the
    result.
    Make sure you handle only the exceptions you are trying to handle
 */

class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(a, b) {

    let result = 0;

    if (isNaN(a) || isNaN(b)) {
        throw new MultiplicatorUnitFailure;
    }

    result += Number(a) * Number(b)
    return result;

}

try {
    let a = prompt("First number")
    let b = prompt("Second Number")

    console.log(primitiveMultiply(a, b))
} catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
        console.log("Please input only numbers")
    }

}