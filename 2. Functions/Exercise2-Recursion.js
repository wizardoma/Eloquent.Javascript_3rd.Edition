/**
 * @author Ibekason Alexander Onyebuchi
 */

/*
    Define a recursive function isEven corresponding to this description. The
    function should accept a single parameter (a positive, whole number) and return
    a Boolean.
 */

const isEven = (num) => {
    num = Math.abs(num)
    if (num === 0){
        return true
    }
    else if (num === 1 ){
        return false
    }

    else return isEven(num-2)
}

console.log(isEven(-1))
// False
console.log(isEven(4))
// True
console.log(isEven(241))
// False